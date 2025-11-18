var posts=["2025/10/10/hello-world/","2025/10/10/测试文章/","2025/10/20/CARBESIA注射液/","2025/10/22/测试2/","2025/11/18/职称申报材料和流程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };