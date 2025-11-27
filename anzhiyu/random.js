var posts=["2025/11/18/职称申报材料和流程/","2025/10/22/RadiAnt DICOM Viewer：可以打开原始格式(DICOM)影像资料的免费软件/","2025/11/27/犬猫液体给予速率/","2025/11/27/血常规、生化各项指标代表的意义/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };