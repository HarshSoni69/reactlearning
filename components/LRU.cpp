#include<bits/stdc++.h>
#include<iostream>
#include<unordered_map>
#include<unordered_set>
using namespace std;
int getpages(int P[],int frames,int n ){
    unordered_map<int,int> mp;
    unordered_set<int> st;
    int count=0;
    if(st.size()<frames){
        if(st.find(P[i])==st.end()){
            st.insert(P[i]);
            count++;
        }
            mp[P[i]]=i;
    }
    else {
        if(st.find(P[i])==st.end()){
            int lru=INT_MAX,val;
            for( auto it=st.begin();it!=st.end();it++){
                if(mp[*it]<lru){
                    lru=mp[*it];
                    val=*it;
                }
            }
                st.erase(value);
                st.insert(P[i]);
                count++;
        }
                mp[P[i]]=i;
    }
    return count;
}
int main(){
    int pages[] = {1, 3, 5, 3, 2,5,7,8,1,2,3,1,7};
    int n = sizeof(pages)/sizeof(pages[0]);
    int frames = 3;
   int ans= getpages(pages,frames,n);
    cout<<ans;
    return 0;
}