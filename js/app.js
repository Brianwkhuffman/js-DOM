/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var nameTay = document.getElementById('name1');
nameTay.innerHTML = 'Tay-Tay';
//name1.innerHTML = 'Tay-Tay'; <----shortcut way if you know the ID

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var posProject = document.getElementById('position2');
posProject.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var aliasCon = document.getElementById('alias3');
aliasCon.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var profileVerse = document.getElementsByClassName('profile');
profileVerse[0].innerHTML = '1999';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
profileVerse[1].innerHTML = 'Knowing is not enough, we must apply. Willing is not enough, we must do.';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var aliasBox = document.getElementsByClassName('alias');
aliasBox[2].innerHTML = 'Nick Fury'


/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/
var nameDavid = document.createElement('div');
nameDavid.id = 'name7';
nameDavid.innerHTML = 'David Ige';
nameParent.appendChild(nameDavid);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/
var quoteBox = document.createElement('div');
quoteBox.id = 'alias8';
quoteBox.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(quoteBox);


//Final Boss
/*9. Create your own profile.*/

