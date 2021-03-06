#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
//훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.
/*
* 알람을 설정하는데 시간을 출력하는 화면을 구상한다고 생각한다.
* 필요한 요소는 시간, 분, 작동시간, 시간 단위 변경을 위한 공간
* 시간의 제한은 시<=24, 분<=60이며
* 이중 if문을 사용하여 시와 분의 표현을 한다.
*/
void main() {
    int h, m, t;//시간, 분, 오븐작동시간 선언
    int sum;//시간 단위 변경을 위한 빈 공간
    scanf("%d %d", &h, &m);//시간, 분 입력 받음
    scanf("%d", &t);//오븐작동시간 입력 받음
    m = m + t;//분단위로 오븐이 작동하기 때문에 입력받은 두 값을 더함
    if (m > 59) {//더한 값이 60을 넘어간다면 즉, 시간 단위의 변경이 필요한 경우
        sum = m / 60;//더한 값을 60으로 나누어 몫을 sum에 넣는다
        m = m % 60;//더한 값을 60으로 나누어 나머지를 구해 다시 넣는다
        h += sum;//시간에 단위 변경의 수만큼 더한다
        if(h > 23) {//시간이 24를 넘는다면
            h = h % 24;//시간을 24로 나누어 나머지를 구해 다시 넣는다
        }
    }
    printf("%d %d", h, m);//그리하여 구해진 시간과 분을 출력한다
    return 0;//0를 반환한다
}
