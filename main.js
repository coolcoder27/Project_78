var images =
["https://thumbs.dreamstime.com/b/cute-boy-cartoon-illustration-90163697.jpg","https://easydrawingguides.com/wp-content/uploads/2017/02/How-to-draw-a-cartoon-girl-20.png",
"https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg","https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg",
"https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg",
"https://thumbs.dreamstime.com/z/grandfather-portrait-old-man-wearing-glasses-grey-hair-mustache-wearing-sweater-cartoon-grandpa-senior-man-standing-vector-86364474.jpg",
"https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"
];
var names =
["Prince Sharma","Sweeti Sharma","Sheela Sharma","Rajesh Sharma","R.K. Sharma",""];
var i = 0;
function update()
{
    i++;
    var no_of_family_member_arayy = 5
    if(i > no_of_family_member_arayy)
{
i = 0;
}
var updatedimage = images[i];
var updatedname = names[i];
document.getElementById("family_image").src = updatedimage;
document.getElementById("family_member_name").innerHTML = updatedname;
}