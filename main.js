 document.getElementById('myform').addEventListener('submit', addbook);


function addbook(e){
        var sitename = document.getElementById('sitename').value;
        var sitepsw = document.getElementById('sitepsw').value;
        
        var bookmark =  {
                name: sitename,
                psw : sitepsw
        }
       
       //console.log(bookmark);
     //  localStorage.setItem('bookmark', 'hello world');
       //console.log(localStorage.getItem(bookmark));
       if(localStorage.getItem('bookmarks') === null){
              
              var bookmarks = [];
              
              bookmarks.push(bookmark);
              
              localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       }else{
               var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
               
               bookmarks.push(bookmark);
              
               localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

       }
       
e.preventDefault();
};

// fectching the bookmark from the local storage
function fectchbook() {
        // get bookmarks from local storage
              
           var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
           
           var bookmarkResult = document.getElementById('bookmarksResult');
           
           bookmarkResult.innerHTML = '';
           for (i=0;i<bookmarks.length;i++) {
                   // Tab to edit
                   var name = bookmarks[i].name;
                   var url = bookmarks[i].psw;
                   
                   bookmarkResult.innerHTML += '<div class="well">'+
                                                "<h3>"+ name +
                                                 '<a class="btn-default" href="'+url+'" target="_blank">Visit</a>'
                                                "</h3>"+
                                                '</div>';
           }

}fectchbook();