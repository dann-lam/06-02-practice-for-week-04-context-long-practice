function callOnTarget(func, obj1, obj2) {
    //func.call(obj1, obj2)
    //Call variant.
    let resultFunc = func.bind(obj1, obj2)
    return resultFunc()
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
