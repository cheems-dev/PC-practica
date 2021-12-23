#include <stdio.h>
#include <utility>
#include <algorithm>
#include <cstring>
#include <iostream>
using namespace std;

typedef pair<int, int> pi;

int main()
{
  int N, T, c, t, queue[10000];
  pi people[10000];

  cin >> N >> T;

  for (int i = 0; i < N; i++)
  {
    cin >> c >> t;
    people[i] = pi(-c, t); // -c so that cash is sorted in decreasing order
  }

  sort(people, people + N);

  int answer = 0;
  memset(queue, -1, sizeof(queue));
  for (int i = 0; i < N; i++)
  {
    c = -people[i].first;
    t = people[i].second;
    for (int j = t; j >= 0; j--)
    {
      if (queue[j] == -1)
      {
        queue[j] = 1;
        answer += c;
        break;
      }
    }
  }

  cout << answer << endl;

  return 0;
}