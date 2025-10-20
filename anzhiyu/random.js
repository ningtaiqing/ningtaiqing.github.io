var posts=["2025/10/10/hello-world/","2025/10/10/测试文章/","2025/10/20/优泌可/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };