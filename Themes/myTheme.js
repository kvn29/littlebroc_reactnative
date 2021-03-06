import Color from 'color';

import {Platform} from 'react-native';

export default {

    // Badge
    badgeBg: '#ED1727',
    badgeColor: '#f7f7f7',


    // Button
    btnFontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.inverseTextColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.inverseTextColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.inverseTextColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.inverseTextColor;
    },
    get btnTextSize () {
        return (Platform.OS==='ios') ? this.fontSizeBase* 1.1 :
        this.fontSizeBase-1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },

    buttonPadding: 6,

    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },


    // Card
    cardDefaultBg: '#f7f7f7',


    // Check Box
    checkboxBgColor: '#00ffcc',
    checkboxSize: 23,
    checkboxTickColor: '#376092',


    // Color
    brandPrimary : '#376092',
    brandInfo: '#5bc0de',
    brandSuccess: '#00ffcc',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#376092',


    // Font
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSizeBase: 15,

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },


    // Footer
    footerHeight: 55,
    footerDefaultBg: (Platform.OS === 'ios' ) ? '#d7d7d7' : '#376092',


    //FooterTab
    tabBarTextColor: (Platform.OS === 'ios' ) ? '#7f7f7f' : '#d7d7d7',
    tabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#376092' : '#376092',
    tabActiveBgColor: (Platform.OS=='ios') ? '#00ffcc' : '#00ffcc',

    //Tab
    tabDefaultBg: (Platform.OS === 'ios' ) ? '#7f7f7f' : '#376092',
    topTabBarTextColor: (Platform.OS === 'ios' ) ? '#376092' : '#00ffcc',
    topTabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    topTabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
    topTabBarBorderColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',


    // Header
    iosToolbarBtnColor: '#376092',
    toolbarDefaultBg: (Platform.OS === 'ios' ) ? '#f7f7f7' : '#376092',
    toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
    toolbarIconSize: (Platform.OS === 'ios' ) ? 20 : 22,
    toolbarInputColor: '#7f7f7f',
    toolbarInverseBg: '#376092',
    toolbarTextColor: (Platform.OS==='ios') ? '#376092' : '#376092',
    get statusBarColor() {
        return Color(this.toolbarDefaultBg).darken(0.2).hexString();
    },


    // Icon
    iconFamily: 'Ionicons',
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    iconMargin: 7,


    // InputGroup
    inputFontSize: 15,
    inputBorderColor: '#d7d7d7',
    inputSuccessBorderColor: '#00ffcc',
    inputErrorBorderColor: '#ed2f2f',

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return '#376092';
    },

    inputGroupMarginBottom: 10,
    inputHeightBase: 40,
    inputPaddingLeft: 5,

    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    },


    // Line Height
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,
    lineHeight: (Platform.OS === 'ios' ) ? 20 : 24,


    // List
    listBorderColor: '#376092',
    listDividerBg: '#376092',
    listItemHeight: 45,
    listItemPadding: (Platform.OS === 'ios' ) ? 12 : 16,
    listNoteColor: '#376092',
    listNoteSize: 13,


    // Progress Bar
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',


    // Radio Button
    radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
    radioColor: '#7f7f7f',

    get radioSelectedColor() {
        return Color(this.radioColor).darken(0.2).hexString();
    },


    // Spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',


    // Tabs
    tabBgColor: '#f7f7f7',
    tabFontSize: 15,
    tabTextColor: '#376092',


    // Text
    textColor: '#376092',
    inverseTextColor: '#d7d7d7',


    // Title
    titleFontSize: (Platform.OS === 'ios' ) ? 17 : 19,
    subTitleFontSize: (Platform.OS === 'ios' ) ? 12 : 14,
    subtitleColor: '#7f7f7f',


    // Other
    borderRadiusBase: (Platform.OS === 'ios' ) ? 5 : 5,
    borderWidth: 1,
    contentPadding: 10,

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },

    dropdownBg: '#d7d7d7',
    dropdownLinkColor: '#7f7f7f',
    inputLineHeight: 24,
    jumbotronBg: '#C9C9CE',
    jumbotronPadding: 30
}
