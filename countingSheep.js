var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

function countSheeps(arrayOfSheep) {

    var num = 0;

    for(var i = 0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] == true)
        num++;
        
    return num;
}
