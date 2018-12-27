
function siftJSON(value,array) {
    let self = this;

    if(value) {
        if(Array.isArray(value)) {
            value.map(item =>
                siftJSON(item, array)
            );
        } else if(typeof value === "object") {
            Object.keys(value).map(key =>
                    siftJSON(value[key], array)
                );
        } else {
            array.push(value);
        }
    }
};

export {siftJSON};

function findImages(array) {
    let tempArray = [];
    array.map(value => {
              if( typeof value === "string" ) {
                  if (value.indexOf('jpg') > 0) {
                      tempArray.push(value);
                  }
              }    
          }
      );

    return tempArray;
}

export {findImages};

function preLoadImages(array, callback) {
    let total = array.length;
    let count = 0;
    array.map(asset => {
        let image;
        image = new Image();

        image.onload = function() {
            
            count += 1;
            if (count == total) {
                callback();
            }
        }
        image.src = asset;
    });
  }

export {preLoadImages};