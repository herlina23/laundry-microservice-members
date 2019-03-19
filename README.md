# Microservice-Member
## Endpoints

### Member (/api/v1/members)

#### Get all members
```bash
GET / 
# authorization: admin and kasir
# Return
# {
#   "create_date": "2019-02-26T14:02:34.131Z",
#   "member_name": "M Nindra Zaka",
#   "phone": "08123456789",
#   "address": "Probolinggo",
#   "member_id": "MEM2",
#   "_id": 2,
#   "__v": 0
# }
```

#### Get a member
```bash
GET /:id
# authorization: admin and kasir
```

#### Create a member
```bash
POST /
# authorization: admin and kasir
#Request Sample

#    {
#       "member_name": "Herlina",
#       "phone": "08123456789",
#       "address": "Malang"
#   }

```

#### Update a member
```bash
PUT /:id
# authorization: admin and kasir
```

#### Delete a member
```bash
DELETE /:id
# authorization: admin and kasir
```
