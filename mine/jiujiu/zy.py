# 高德地图搜索
import requests
import json

url_yy = r"http://restapi.amap.com/v3/place/text?key=766ccea1e59437c614390b967252562e&keywords=医药&city=上海&offset=20&page="
url_zyi = r"http://restapi.amap.com/v3/place/text?key=766ccea1e59437c614390b967252562e&keywords=中医&city=嘉兴&offset=20&page="
url_zyao = r"http://restapi.amap.com/v3/place/text?key=766ccea1e59437c614390b967252562e&keywords=中药&city=嘉兴&offset=20&page="

url = url_yy
print(url + "1")
r = requests.get(url + "1")
load_dict = json.loads(r.text)
rootlist = load_dict.keys()
for rootkey in rootlist:
    print(rootkey)
print(load_dict["count"])
p = int(load_dict["count"]) // 20 + 1
print(p)
f = open('/home/swd/learn/mine/jiujiu/嘉兴_医药.txt', 'w')
for i in range(8, 9):
    r = requests.get(url + str(i + 1))
    load_dict = json.loads(r.text)
    for poi in load_dict["pois"]:
        ad = poi["address"]
        if(type(ad) != list):  # 空是list
            print(ad)
            f.write(poi["name"])
            f.write("\n")
            f.write("{}{}".format(poi["adname"], ad))
            f.write("\n")
            f.write("\n")
f.close()
print("DONE!")
