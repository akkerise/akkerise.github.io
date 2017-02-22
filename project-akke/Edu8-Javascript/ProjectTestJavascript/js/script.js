function gt(n) {
    if(n==0){
        return 1;
    }
    return n*gt(n-1);
}
// Thuật toán đệ quy
