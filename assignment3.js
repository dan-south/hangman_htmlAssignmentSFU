alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 
word_to_guess = "SPHYNX"   //random_word()             //"CANADA"        

guessed_letters = ""

incorrect_guesses = 0 
 
correct_letters = 0 
//danny edit- add letters to span

//-------------------------------------------//
create_options = function(){
	i=0
	j=0
	while(i<26){
		character = alphabet.charAt(i)
		jQuery("#select_letter").append("<span class=\"unguessed\">"+character+"</span>")
		i++
		
	}
	while(j < word_to_guess.length){
		jQuery("#progress").append("<span id=\""+j+"\"><strong>"+" _ "+"</strong></span>")
		j++
	}  
	
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//--------- LETTER CLICKED ----------//
letter_clicked = function() {

	
    //Change the class of the <span> that was clicked 
	
	jQuery(this).attr("class","guessed")
	letter = jQuery(this).text()
	
	jQuery(this).off()

    //Change this line to retrieve the letter that was clicked and 
     //letter = ""

    //then add it to the guessed_letters string    
    //The .include() function will return true if letter is somewhere in word_to_guess
    successful = (word_to_guess.includes(letter))     
    if (successful) {
    //Progress was made, so update the displayed progress
        show_word_progress()         
        //Check if the user has won and take appropriate actions if they have         
    } 
	else {
		incorrect_guesses++
		new_image = "<div id=\"image\"><img id=\"imagery\" alt=image src=\""+incorrect_guesses+".png\" height=\"180px\" width=\"180px\"></img></div>"
		jQuery("#image").html(new_image)
        //An incorrect guess, take appropriate action      
		if(incorrect_guesses >= 6 ){
			jQuery("#result").append("<p><strong>GAME OVER: The word is "+word_to_guess+"</strong></p>")
			jQuery("*").off()
		}
        //Check if the user has lost and take appropriate action if they have
    }
}



//This function will display the current progress of the player, i.e. _ _ _ _ _ _  or C _ N _ D _
//It will also keep the correct_letters variable set correctly
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//----------- SHOW WORD PROGRESS -------------//

c=0
show_word_progress = function() {
	
    correct_letters = 0	

	while(correct_letters < word_to_guess.length){
		
		character2 = word_to_guess.charAt(correct_letters)
		
		if(character2 == letter){  
			c++     			
			jQuery("#"+correct_letters+"").html("<span><strong> "+letter+" </strong></span>")

			if(c == word_to_guess.length){
				jQuery("#result").append("<h3>YOU WIN !!</h3>")
				win_image = "<div id=\"image\"><img id=\"imagery\" alt=image src=\"winner.png\" height=\"180px\" width=\"180px\"></img></div>"
				jQuery("#image").html(win_image)
				jQuery("*").off()
			}
		} 	
		correct_letters++
	}


    word_progress = ""  //will be built into a string such as "C _ N _ D _"

    //Loop through the word_to_guess string.  For each character...
    //If the letter has been guessed, display it and increase the value of correct_letters.  Use the .includes() function used earlier to check if a letter has been guessed
    //Otherwise, display an underscore,_, character
     
    //Seperate the letters and underscores with a single space "C A _ A _ A", not "CA_A_A"
    //It is ok to have an extra space at the beginning or end, " C A _ A _ A" or "C A _ A _ A "
 
    //Display the progress
}
 
 
 
setup = function() {
	create_options()

	jQuery(".unguessed").click(letter_clicked)
    //Create the <span> elements for the user to click     
    //Call show_word_progress()  If working it will display an underscore for each letter when called here
	show_word_progress()
  //Connect the letter_clicked with the appropriate elements/event
}
 
$(document).ready(setup)

		