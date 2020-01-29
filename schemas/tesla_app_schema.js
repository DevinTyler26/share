// MongoDB Schema
user = {
  "_id": ObjectId("5ddec02bc23c74117af22dac"),
  "username": "devintyler26",
  "email": "dtyler.cunningham@gmail.com",
}

vehicle = {
  "_id": ObjectId("5678"),
  "id": 55619287574696016,
  "vehicle_id": 1154919923,
  "vin": "5YJ3E1EB5KF386157",
  "display_name": "Tyl3r",
  "option_codes": "AD15,...",
  "color": None,
  "tokens": [
    "3f97205e77a67ca7",
    "08e2f93583d415dc"
  ],
  "state": "asleep",
  "in_service": False,
  "id_s": "55619287574696016",
  "calendar_enabled": true,
  "api_version": 7,
  "backseat_token": None,
  "backseat_token_updated_at": None,
  "user_ids": [ObjectId("5ddec02bc23c74117af22dac"),]
}

profile = {
  "_id": ObjectId("sa1242"),
  "user_id": ObjectId("5ddec02bc23c74117af22dac"),
  "first_name": "devin",
  "last_name": "cunningham",
  "dob": "04/20/1991",
  "profile_photo": "www.aws.com/s3/profile_pic.png",
  "city": "redmond",
  "state": "wa",
  "street": "17112 ne 45th pl",
  "unit_apt": "apt 79",
  "zip": "98052"
}

tesla_account = {
  "_id": ObjectId("1255646534"),
  "user_id": ObjectId("5ddec02bc23c74117af22dac"),
  "access_token": "rofl5f64af713cea590a2e2afc9b38abca1300ac73984056853d6f68df2b0e8d....",
  "token_created_at": 1580251079,
  "token_expires_in": 3888000,
  "refresh_token": "lola77bdd2a59d11ca49a3a7a6def310ba9fae4794e88a9df2cfdbaf4a5f...",
  "vehicle_ids": [ObjectId("5678"),]
}
 