import json

# aws dynamodb batch-write-item     --request-items file://storesToDynamoDB.json

with open('stores.json','rb') as f:
    data = json.load(f)
    stores = data['stores']
    output = []
    for storeInfo in stores:
        id = list(storeInfo.keys())[0]
        store = storeInfo[id]
        name = store['shop_name']
        lat = store['lat']
        lon = store['lon']
        terminal = store['terminal']
        level = store['level']
        tags = [store['category']]

        storeJson = {"PutRequest":
            {"Item":
                {
                    "id": {"S":id},
                    "storeName": {"S": name},
                    "description": {"S": "ABCDEFG"},
                    "tags": {"SS": tags},
                    "lat": {"N":lat},
                    "long": {"N":lon},
                    "floor": {"N":level},
                    "terminal": {"N":terminal}
                }
            }
        }
        output.append(storeJson)

    with open('storesToDynamoDB.json','w') as file:
        json.dump({"Store-wnn4jgv2pvdaxadpcoanf5tdri-dev": output}, file, indent=4)
