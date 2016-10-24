// determine how interval B overlaps with interval A

function _isOverlap( aStart, aFinish, bStart, bFinish ){

  aStart  = moment(aStart).unix();
  aFinish = moment(aFinish).unix();

  bStart  = moment(bStart).unix();
  bFinish = moment(bFinish).unix();

  var isOverlap = true;
  var overlapBy = null;

  var isGetIn = bStart <= aStart && aFinish <= bFinish;
  if (isGetIn){
    overlapBy = "a-in-b";

  } else {
    var isStartIn  = aStart <= bStart  && bStart  <= aFinish;
    var isFinishIn = aStart <= bFinish && bFinish <= aFinish;

    if (isStartIn && isFinishIn) {
      overlapBy = "b-in-a";
    }
    else if (isStartIn && !isFinishIn) {
      overlapBy = "b-start-in-a";
    }
    else if (!isStartIn && isFinishIn) {
      overlapBy = "b-finish-in-a";
    }
    else{
      isOverlap = false;
    }
  }

  return {
    "isOverlap": isOverlap,
    "overlapBy": overlapBy
  };
}
//--------------------------------------------------------------------------------------------------------------------
// end _isOverlap()