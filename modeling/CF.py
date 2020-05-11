import pandas as pd
from sklearn import preprocessing
from sklearn.externals import joblib

model = joblib.load("k_modes.pkl")
train = pd.read_csv("data_folder/clustering_users.csv")
df = pd.DataFrame(train)

def recommend_people(request_body):

    def jaccard_sim(a, b):
        """Return jaccard similarity
        Args:
            a: user/store feature set
            b: user/store feature set
        Return:
            jaccard: jaccard sim value
        """
        intersection = a.intersection(b)
        union = a.union(b)
        jaccard = len(intersection) / len(union)
        return jaccard

    store_names = ['Britt Shop',
 'Chilli Beans',
 'Dufry',
 'Empório do Aço',
 'FOM',
 'MAC Cosmetics',
 'O Boticário',
 'Sunglass Hut',
 'Granado Pharmacias',
 "L'Occitane",
 'Maybelline New York',
 'Livraria Leitura',
 'WH Smith',
 'Hudson News',
 'Air Farma',
 'Polo Ralph Lauren',
 'Amsterdam Sauer',
 'ARTY Rio',
 'Bola Show',
 'Ehven Pedras',
 'Energia Natural',
 'Mr.Cat',
 'Track & Field']
    
    cols = ['country','age','gender','category','Britt Shop','Chilli Beans','Dufry','Empório do Aço','FOM','MAC Cosmetics','O Boticário','Sunglass Hut','Granado Pharmacias',"L'Occitane",'Maybelline New York','Livraria Leitura','WH Smith','Hudson News','Air Farma','Polo Ralph Lauren','Amsterdam Sauer','ARTY Rio','Bola Show','Ehven Pedras','Energia Natural','Mr.Cat','Track & Field']
    new = pd.DataFrame(columns = cols)
    new_row = {}
    new_row['country'] = request_body['Country']
    new_row['age'] = request_body['Age_range']
    new_row['gender'] = request_body['Gender']
    new_row['category'] = request_body['Category']
    for each in store_names:
        if each in request_body['Favorite']:
            new_row[each] = 1
        else:
            new_row[each] = 0
    new = new.append([new_row],ignore_index=True)
    le = preprocessing.LabelEncoder()
    le_country = le.fit(df['country'])
    le = preprocessing.LabelEncoder()
    le_age = le.fit(df['age'])
    le = preprocessing.LabelEncoder()
    le_gender = le.fit(df['gender'])
    le = preprocessing.LabelEncoder()
    le_category = le.fit(df['category'])
    new['country'] = le_country.transform(new['country'])
    new['age'] = le_age.transform(new['age'])
    new['gender'] = le_gender.transform(new['gender'])
    new['category'] = le_category.transform(new['category'])
    
    cluster = model.predict(new)
    print(cluster)
    cluster_num = int(cluster[0])

    df['attributes'] = df.apply(lambda x : set([x['country'], x['age'], x['gender'], x['category']]), axis = 1)
    data_list = df[df['label']==cluster_num].to_dict('records')

    simi_users = []
    new_user = [request_body['Country'], request_body['Age_range'], request_body['Gender'], request_body['Category']]
    new_user.extend(request_body['Favorite'])
    n_user = set(new_user)

    user_similarity = []
    for each in data_list:
        
        user = each['attributes']
        similarity = jaccard_sim(n_user, user)
        user_similarity.append((each['ClientMacAddr'], each['store'], similarity))
    sort_similarity = sorted(user_similarity, key = lambda x: x[2])[:5]
    simi_users = [{each[0]:each[1]} for each in sort_similarity]
    

    return simi_users

request_body = {"Flag":"False","Gender":"male","Country":"US","Category":"mall","Age_range":"15-24","Location":{"Lat":-22.814785,"Lon":-43.246648},"Favorite":["18","2","16"]}
simi_users = recommend_people(request_body)
print(simi_users)

