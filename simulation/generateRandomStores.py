import random
import json

# Could use  aws dynamodb batch-write-item     --request-items file://data.json
all_tags = [
    'Clothing',
    'Shoes',
    'Consumer Electronics',
    'Books',
    'Movies',
    'Cosmetics',
    'Food and Drinks',
    'Sports',
    'Music',
    'Entertaining',
    'DIY',
    'Games',
    'Traveling',
    'Electronics',
    'Furniture',
    'Accessories',
    'Luxury',
    'Economical'
]
def generate(id,name):
    store = {
        "id": {"S":str(id)},
        "storeName": {"S": name},
        "description": {"S": "ABCDEFG"},
        "tags": {"SS": random.sample(all_tags,5)},
        "lat": {"N":str(0.0)},
        "long": {"N":str(0.0)},
        "floor": {"N":str(random.randint(1,3))},
        "terminal": {"N":str(random.randint(1,2))}
    }

    return {"PutRequest":{"Item":store}}

stores = []
for id in range(0,10):
    stores.append(generate(id,chr(ord('a') + id)))
    
with open('data.json','w') as file:
    json.dump({"Store-fy4gih74dzaw3fznmgahrq5knu-dev": stores}, file, indent=4)