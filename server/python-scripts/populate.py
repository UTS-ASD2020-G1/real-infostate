## Author: Michelle Tanoto
from bs4 import BeautifulSoup
import pymongo
import dns
import bcrypt

myclient = pymongo.MongoClient("mongodb+srv://Michelle:asdsucks@cluster0.dviis.mongodb.net/RealInfoState?retryWrites=true&w=majority")
mydb = myclient["RealInfoState"]
mycol = mydb["users"]
password = "abcd1234"
mycol.insert_one({ "firstName" : "Michelle", "lastName" : "Tanoto", "email" : "13175144@student.uts.edu.au", "address" : "Chatswood, Sydney", "username" : "Michelle_123" ,"password" : bcrypt.hashpw(password, bcrypt.gensalt()) })
mycol.insert_one({ "firstName" : "Felix", "email" : "felix240600@gmail.com", "address" : "Strathfield, Sydney","username" : "Felix000" ,"password" : bcrypt.hashpw(password, bcrypt.gensalt()) })
mycol.insert_one({ "firstName" : "Oscar", "lastName" : "Tian", "email" : "13390657@student.uts.edu.au", "address" : "Zetland, Sydney", "username" : "Oscar_80" ,"password" : bcrypt.hashpw(password, bcrypt.gensalt()) })
mycol.insert_one({ "firstName" : "Frank", "lastName" : "Moe", "email" : "jiangjiahao0326@gmail.com", "address" : "Central, Sydney", "username" : "Frank97" ,"password" : bcrypt.hashpw(password, bcrypt.gensalt()) })


