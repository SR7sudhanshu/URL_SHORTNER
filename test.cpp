#include<bits/stdc++.h>
using namespace std;
bool isvalid(string s){
        stack<char>st;
        for(int i=0;i<s.size();i++){
            if(s[i]=='(') st.push(s[i]);
            else{
                if(!st.empty()){
                    st.pop();
                }
                else return false;
            }
        }
        if(!st.empty()) return false;
        else return true;
    }
int main(){
    string s="()((((((((()))))))))";
    if(isvalid(s)) cout<<1;
    else cout<<0;
} // namespace std;
