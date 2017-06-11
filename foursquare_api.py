from foursquare import Foursquare 

client = Foursquare(client_id='KEE332SEACBCB00LBQ5QBS5OQYPHYBGBO2LEK14RFUJOGHS0', client_secret='SJ4L5E5RDMHSPA0EZNH0RS5QTEK0DMDGV5XI2TGCCASBMTBO')

# Build the authorization url for your app
auth_uri = client.oauth.auth_url()

rooftops = client.users()

