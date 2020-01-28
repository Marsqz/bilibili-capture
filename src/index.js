(function() {
  "use strict";

  
  // 得到当前播放的video标签
  function getVideo() {
    return document.getElementsByTagName("video")[0];
  }

  // 根据清晰度, 获取画布大小
  function getSize() {
    let text =
      (
        document.getElementsByClassName(
          "bui-select-item bui-select-item-active"
        )[0] || {}
      ).innerText || "default";
    let sizeMap = {
      "360P": {
        width: 460,
        height: 360
      },
      "480P": {
        width: 640,
        height: 480
      },
      "720P": {
        width: 1080,
        height: 720
      },
      "1080P": {
        width: 1920,
        height: 1080
      },
      "1080P+": {
        width: 1080,
        height: 1920
      }
    };

    let sizeList = ["360P", "480P", "720P", "1080P", "1080P+"];
    for (let i of sizeList)
      if (text.includes(i)) {
        console.log("图片质量", i);
        return sizeMap[i];
      }

    return sizeMap["480P"];
  }

  function capture() {
    let video = getVideo();
    if (!video) {
      window.alert("请确认页面中含有视频");
      return;
    }
    console.log("video", video);
    let canvas = document.createElement("canvas");
    let { width, height } = getSize();
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(
      blob => {
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        let filename = `${document.title}_${+new Date()}.jpg`;
        link.download = filename;
        link.innerText = filename;
        link.click();
      },
      "image/png",
      1 // [0,1] 表示图片质量
    );
  }

  function init() {
    document.addEventListener("keydown", e => {
        // ctrl shift s
      if (e.ctrlKey && e.shiftKey && e.keyCode === 83) {
        e.preventDefault();
        e.stopPropagation();
        capture();
      }
    });
  }

  window.addEventListener("load", init, false);
})();
