7Seas.

Description

This is an App for people to find people and share good times at the sea. Users will find differents offers from sailors and their boats.
If you own a boat and looking for sailors or viceversa, thats your App!!!


User Stories

· 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

· Signup: As an anon I can sign up in the platform so that I can start playing into competition.

· Login: As a user I can login to the platform so that I can play competitions.

· Logout: As a user I can logout from the platform so no one else can use it.

· Add offer: As a user I can add a sailing offer as a crew or a boat owner.

· Edit offer: As a user I can edit a offer.

· Edit profile: As a user I can edit my user and boat profile.

· View offers: As an anon I can view the crew and boat offers list.

· View details: As a user I can view offer details.



Backlog

· Add more searchs filters in /offers page.

· Generate crew offers.

· Add favourites option from offers.

· Generate internal chat between users.




REACT ROUTES :
PATH			            COMPONENT		            PERMISIONS		        BEHAVIOR

/			                Home page		            Public	<Route>		    Home Page
-----------------------------------------------------------------------------------------------------------------------
/signup		                SignupPage		            anon only		        Signup Form, link to login, 
                        	                            <AnonRoute>		        navigate to home page after SignUp
-----------------------------------------------------------------------------------------------------------------------
/login			            LoginPage		            anon only		        Signup Form, link to login,
						                                <AnonRoute>		        navigate to home page after SignUp	
-----------------------------------------------------------------------------------------------------------------------
/Profile			        ProfilePage		            UserOnly		        Shows user profile, and links to edit it
						                                <Private Route>	        Link to create or edit offers
-----------------------------------------------------------------------------------------------------------------------
/Profile/:id/edit		    EditProfilePage		        UserOnly		        Edits user and boat info
						                                <Private Route>
-----------------------------------------------------------------------------------------------------------------------
/Profile/:id/createoffer	CreateOfferPage	            UserOnly		        User create own offers
						                                <PrivateRoute>
-----------------------------------------------------------------------------------------------------------------------
/offers			            Offers Page		            Public Route		    Offers main page
-----------------------------------------------------------------------------------------------------------------------
/offers/crew		        Offers Crew Page	        Public Route		    Offers main page filtered by crew
-----------------------------------------------------------------------------------------------------------------------
/offers/boats		        Offers Boat Page	        Public Route		    Offers main page filtered by boat
-----------------------------------------------------------------------------------------------------------------------
/offers/:id		            Details of the offer	    UserOnly		        Shows the detail of the offer
						                                <Private Route>	        (boat and crew)
-----------------------------------------------------------------------------------------------------------------------
/offers/:id			        Offers Page		            Public Route		    Offers main page




Components

· Navbar.

· LoginPage.



· Auth Service:

    auth.login(user)
    auth.signup(user)
    auth.logout()
    auth.me()

· Offers Service:

    offer.list()
    offer.detail(id)
    offer.add(id)
    offer.delete(id)

· User:

    user.detail(id)
    user.add(id)
    user.delete(id)

· Boat:

    boat.detail(id)
    boat.add(id)
    boat.delete(id)


Server/Backend

Models

MODEL USER 

{
username: String,
password: String,
age: String,
gender: {type: String, enum: ["Male", "Female"]}, 
disponibility: Date,
email: String,
languages: String,
country: String,
city: String,
experience: {type: String, enum: ["low", "medium", "high"]}, 
lookingForSail: Boolean,
image: String
}

MODEL BOAT :

{
boatName: String,
year: String,
typeBoat: {type: String, enum: ["power", "sail"]}, 
country: String,
currentLocation: String,
crewNumber: Number,
rooms: Number,
owner: {type: Schema.Types.ObjectId, ref: 'User'},
lenght: Number
image: String
}

MODEL OFFER :

{
crewNumber: Number,
boardingLocation: String,
destiny: String,
costs: {type: String, enum: ["unpaid", "paid", "contributing"]}, 
start: Date,
estimatedTime: String,
description: String,
nationality: String,
ageCrew: Number,
journey: {type: String, enum: ["tourism", "cruising", "regatta", "charter"]},
experience: {type: String, enum: ["required", "no required"]},
seaMiles: {type: String, enum: ["no required", "more than 100 miles", "more than 1000 miles", "more than 10000 miles"]},
offerImage: {type: Schema.Types.ObjectId, ref: 'boat'},
}



API Endpoints (backend routes)







Links 

Trello

· https://trello.com/b/ZiguSPQz/7seas 

Git

· Client: https://github.com/MarcSadurni/7SeasClient

· Server: https://github.com/MarcSadurni/7SeasServer

Slides

· https://github.com/MarcSadurni/7SeasServer 