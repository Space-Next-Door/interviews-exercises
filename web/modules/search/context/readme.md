# I used context api. It is because of two things  
1- Design logic will handle separately
2- State logic will handle separately

# Why I select context api instead of redux?  
1- Redux is best when we pass state between siblings. But in our present case state is passing from parent to third last child therefore I used context instead of redux. we can use redux in this case and it depends upon you
