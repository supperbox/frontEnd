function quicksort(arr, begin, end) {
  if (begin >= end) {
    return;
  }
  let flag = arr[begin];
  while (begin < end) {
    while (arr[end] > flag && end > begin) {
      end--;
    }
    while (arr[begin] <= flag && begin < end) {
      begin++;
    }
    [arr[begin], arr[end]] = [arr[end], arr[begin]];
  }
}
