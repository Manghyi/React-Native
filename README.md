# React-native to study alone

## How to start React-native for window

1. Need some tools and program
  - node
  - python
  - React-Native-CLI
  - JDK (JAVA DEVELOPE KIT)

  and android studio

2. Setting android studio
  Configure > SDK Manger > Check show package Details > Find List below and Check them

**list**
- Android SDK Platform 28
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image

3. Setting Environment Variable
  Advanced System setting > Advanced Tap >
  Check 'Environment Variable' button > 
  Check 'New' button below User Variables >
  Make Variable name 'ANDROID_HOME' to set value android sdk loaction >
  *if you can't find location, you can find using android studio SDK manger belong Configure*
  Edit Path in User variables > Create platform-tools location below sdk location

4. Conect Cell phone using USB and run project
  $ npm run android

## React-native Window에서 실행하는 법

1. 프로그램 실행에 필요한 패키지 툴과 프로그램 설치하기
  - node
  - python
  - React-Native-CLI
  - JDK (JAVA DEVELOPE KIT)

  and android studio

2. Android Studio 설정하기
  Configure 클릭 > SDK Manger 클릭 > 우측하단에 show package Details 체크 > 아래 리스트를 찾아 체크 후 다운로드

**list**
- Android SDK Platform 28
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image

3. 안드로이드를 사용하기 위한 환경 변수 생성
  내 PC 우측 클릭 > 속성 > 고급 시스템 설정 > 환경 변수 > 사용자 변수에 생성 >
  ANDROID_HOME 이란 이름으로 변수 생성하고 값을 Android Studio 에서 설치했던 SDK 폴더 위치로 설정 >
  *위치를 찾기 힘들면, 위 Android Studio 설정하기에 SDK Manger 항목에 위치가 있음*
  사용자 변수 중에 'Path'를 찾아 클릭 후 변경 > 
  위에 언급한 SDK 폴더 하위에 있는 platform-tools 위치를 추가

4. USB를 연결해 PC와 핸드폰을 연결 후에 react-native 파일 실행
  $npm run android

## React-native Mac에서 실행하는 법

1. 프로그램 실행에 필요한 패키지 툴과 프로그램 설치하기
  - node
  - Watchman 
  - Xcode 
  - Cocoapods 
  - React-Native-CLI
  - JDK (JAVA DEVELOPE KIT)

  and android studio

2. Android Studio 설정하기
  Configure 클릭 > SDK Manger 클릭 > 우측하단에 show package Details 체크 > 아래 리스트를 찾아 체크 후 다운로드

**list**
- Android SDK Platform 28
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image

3. 안드로이드 스튜디오 환경 변수 설정
  1. ~/.bash_profile 파일 또는 ~/.zshrc 파일을 연다.
  2. 아래와 같이 파일을 수정한다.
  ```
    # export ANDROID_HOME=$HOME/Library/Android/sdk
    export ANDROID_HOME=자신의 안드로이드SDK 위치/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```
4. USB를 연결해 PC와 핸드폰을 연결 후에 react-native 파일 실행
  $npm run android