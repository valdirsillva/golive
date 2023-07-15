/*!

 =========================================================
 * Light Bootstrap Dashboard - v1.4.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.



/*           Font Smoothing      */
body,
    h1, .h1,
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6,
    p,
.navbar,
.brand,
.btn - simple,
.alert,
    a,
.td - name,
    td,
    button.close {
    -moz - osx - font - smoothing: grayscale;
    -webkit - font - smoothing: antialiased;
    font - family: "Open Sans", "Helvetica Neue", Arial, sans - serif;
    font - weight: 400;
}



p {
    font - size: 16px;
    line - height: 1.5;
}

h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1.small, h2.small, h3.small, h4.small, h5.small, h6.small, .h1.small, .h2.small, .h3.small, .h4.small, .h5.small, .h6.small {
    color: #9A9A9A;
    font - weight: 300;
    line - height: 1.5;
}

h1 small, h2 small, h3 small, h1.small, h2.small, h3.small {
    font - size: 60 %;
}

h1.subtitle {
    display: block;
    margin: 0 0 30px;
}

.text - muted {
    color: #9A9A9A;
}

.text - primary, .text - primary:hover {
    color: #1D62F0!important;
}

.text - info, .text - info:hover {
    color: #1DC7EA!important;
}

.text - success, .text - success:hover {
    color: #87CB16!important;
}

.text - warning, .text - warning:hover {
    color: #FF9500!important;
}

.text - danger, .text - danger:hover {
    color: #FF4A55!important;
}

/*     General overwrite     */
body,
.wrapper {
    min - height: 100vh;
    position: relative;
}

body {
    background: rgba(203, 203, 210, 0.15);
}

a {
    color: #1DC7EA;
}

a: hover, a:focus {
    color: #42d0ed;
    text - decoration: none;
}

a: focus, a: active,
    button:: -moz - focus - inner,
        input:: -moz - focus - inner,
            input[type = "reset"]:: -moz - focus - inner,
                input[type = "button"]:: -moz - focus - inner,
                    input[type = "submit"]:: -moz - focus - inner,
                        select:: -moz - focus - inner,
                            input[type = "file"] > input[type = "button"]:: -moz - focus - inner {
    outline: 0;
}

.ui - slider - handle: focus,
.navbar - toggle,
    input:focus {
    outline: 0!important;
}



.fa {
    width: 18px;
    text - align: center;
}

.margin - top {
    margin - top: 50px;
}

.wrapper {
    position: relative;
    top: 0;
    height: 100vh;
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: auto;
    left: 0;
    width: 260px;
    display: block;
    z - index: 1;
    color: #fff;
    font - weight: 200;
    background - size: cover;
    background - position: center center;
}

.sidebar.sidebar - wrapper {
    position: relative;
    max - height: calc(100vh - 75px);
    min - height: 100 %;
    overflow: auto;
    width: 260px;
    z - index: 4;
    padding - bottom: 100px;
}

.sidebar.sidebar - background {
    position: absolute;
    z - index: 1;
    height: 100 %;
    width: 100 %;
    display: block;
    top: 0;
    left: 0;
    background - size: cover;
    background - position: center center;
}

.sidebar.logo {
    padding: 10px 15px;
    border - bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar.logo p {
    float: left;
    font - size: 20px;
    margin: 10px 10px;
    color: #FFFFFF;
    line - height: 20px;
    font - family: "Helvetica Neue", Helvetica, Arial, sans - serif;
}

.sidebar.logo.simple - text {
    padding: 5px 0px;
    display: block;
    font - size: 18px;
    color: #FFFFFF;
    text - align: center;
    font - weight: 400;
    line - height: 30px;
}

.sidebar.logo - tim {
    border - radius: 50 %;
    border: 1px solid #333;
    display: block;
    height: 61px;
    width: 61px;
    float: left;
    overflow: hidden;
}

.sidebar.logo - tim img {
    width: 60px;
    height: 60px;
}

.sidebar.nav {
    margin - top: 20px;
    float: none;
}

.sidebar.nav.open > a,
.sidebar.nav li.dropdown.dropdown - menu li: hover > a,
.sidebar.nav li: hover > a {
    background - color: rgba(255, 255, 255, 0.13);
    opacity: 1;
}

.sidebar.nav li > a {
    color: #FFFFFF;
    margin: 5px 15px;
    opacity: .86;
    border - radius: 4px;
    display: block;
}

.sidebar.nav li.active > a {
    color: #FFFFFF;
    opacity: 1;
    background: rgba(255, 255, 255, 0.23);
}

.sidebar.nav li.separator {
    margin: 15px 0;
    border - bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar.nav li.separator + li {
    margin - top: 31px;
}

.sidebar.nav p {
    margin: 0;
    line - height: 30px;
    font - size: 12px;
    font - weight: 600;
    text - transform: uppercase;
    margin - left: 45px;
}

.sidebar.nav i {
    font - size: 28px;
    float: left;
    margin - right: 15px;
    line - height: 30px;
    width: 30px;
    text - align: center;
}

.sidebar.nav.caret {
    margin - top: 13px;
    position: absolute;
    right: 30px;
}


.sidebar: after, .sidebar:before {
    display: block;
    content: "";
    position: absolute;
    width: 100 %;
    height: 100 %;
    top: 0;
    left: 0;
    z - index: 2;
}

.sidebar:before {
    opacity: .33;
    background: #000000;
}

.sidebar:after {
    background: #787878;
    background: -moz - linear - gradient(top, #787878 0 %, #343434 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #787878), color - stop(100 %, #343434));
    background: -webkit - linear - gradient(top, #787878 0 %, #343434 100 %);
    background: -o - linear - gradient(top, #787878 0 %, #343434 100 %);
    background: -ms - linear - gradient(top, #787878 0 %, #343434 100 %);
    background: linear - gradient(to bottom, #787878 0 %, #343434 100 %);
    background - size: 150 % 150 %;
    z - index: 3;
    opacity: 1;
}

.sidebar[data - image]: after, .sidebar.has - image:after {
    opacity: .77;
}

.sidebar[data - color= "blue"]:after {
    /* background: #1F77D0; */
    background: -moz - linear - gradient(top, #1F77D0 0 %, #533ce1 100 %);
    /* background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1F77D0), color-stop(100%, #533ce1)); */
    /* background: -webkit-linear-gradient(top, #1F77D0 0%, #533ce1 100%); */
    background: -o - linear - gradient(top, #1F77D0 0 %, #533ce1 100 %);
    background: -ms - linear - gradient(top, #1F77D0 0 %, #533ce1 100 %);
    background: linear - gradient(to bottom, #490a9d 0 %, #533ce1 100 %);
    background - size: 150 % 150 %;
}

.sidebar[data - color= "azure"]:after {
    background: #1DC7EA;
    background: -moz - linear - gradient(top, #1DC7EA 0 %, #4091ff 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #1DC7EA), color - stop(100 %, #4091ff));
    background: -webkit - linear - gradient(top, #1DC7EA 0 %, #4091ff 100 %);
    background: -o - linear - gradient(top, #1DC7EA 0 %, #4091ff 100 %);
    background: -ms - linear - gradient(top, #1DC7EA 0 %, #4091ff 100 %);
    background: linear - gradient(to bottom, #1DC7EA 0 %, #4091ff 100 %);
    background - size: 150 % 150 %;
}

.sidebar[data - color= "green"]:after {
    background: #87CB16;
    background: -moz - linear - gradient(top, #87CB16 0 %, #6dc030 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #87CB16), color - stop(100 %, #6dc030));
    background: -webkit - linear - gradient(top, #87CB16 0 %, #6dc030 100 %);
    background: -o - linear - gradient(top, #87CB16 0 %, #6dc030 100 %);
    background: -ms - linear - gradient(top, #87CB16 0 %, #6dc030 100 %);
    background: linear - gradient(to bottom, #87CB16 0 %, #6dc030 100 %);
    background - size: 150 % 150 %;
}

.sidebar[data - color= "orange"]:after {
    background: #FFA534;
    background: -moz - linear - gradient(top, #FFA534 0 %, #ff5221 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #FFA534), color - stop(100 %, #ff5221));
    background: -webkit - linear - gradient(top, #FFA534 0 %, #ff5221 100 %);
    background: -o - linear - gradient(top, #FFA534 0 %, #ff5221 100 %);
    background: -ms - linear - gradient(top, #FFA534 0 %, #ff5221 100 %);
    background: linear - gradient(to bottom, #FFA534 0 %, #ff5221 100 %);
    background - size: 150 % 150 %;
}

.sidebar[data - color= "red"]:after {
    background: #FB404B;
    background: -moz - linear - gradient(top, #FB404B 0 %, #bb0502 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #FB404B), color - stop(100 %, #bb0502));
    background: -webkit - linear - gradient(top, #FB404B 0 %, #bb0502 100 %);
    background: -o - linear - gradient(top, #FB404B 0 %, #bb0502 100 %);
    background: -ms - linear - gradient(top, #FB404B 0 %, #bb0502 100 %);
    background: linear - gradient(to bottom, #FB404B 0 %, #bb0502 100 %);
    background - size: 150 % 150 %;
}

.sidebar[data - color= "purple"]:after {
    background: #9368E9;
    background: -moz - linear - gradient(top, #9368E9 0 %, #943bea 100 %);
    background: -webkit - gradient(linear, left top, left bottom, color - stop(0 %, #9368E9), color - stop(100 %, #943bea));
    background: -webkit - linear - gradient(top, #9368E9 0 %, #943bea 100 %);
    background: -o - linear - gradient(top, #9368E9 0 %, #943bea 100 %);
    background: -ms - linear - gradient(top, #9368E9 0 %, #943bea 100 %);
    background: linear - gradient(to bottom, #9368E9 0 %, #943bea 100 %);
    background - size: 150 % 150 %;
}

.main - panel {
    position: relative;
    z - index: 2;
    float: right;
    width: calc(100 % - 260px);
}

.main - panel > .content {
    padding: 30px 15px;
    min - height: calc(100 % - 123px);
}

.main - panel > .footer {
    border - top: 1px solid #e7e7e7;
}

.main - panel.navbar {
    margin - bottom: 0;
}

.sidebar,
.main - panel {
    max - height: 100 %;
    height: 100 %;
}

.alert {
    border: 0;
    color: #FFFFFF;
    padding: 10px 15px;
    font - size: 14px;
}

.container.alert {
    border - radius: 4px;
}

.navbar.alert {
    border - radius: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 85px;
    width: 100 %;
    z - index: 3;
}

.navbar: not(.navbar - transparent).alert {
    top: 70px;
}

.alert span[data - notify= "icon"] {
    font - size: 30px;
    display: block;
    left: 15px;
    position: absolute;
    top: 50 %;
    margin - top: -15px;
}

.alert button.close {
    position: absolute;
    right: 10px;
    top: 50 %;
    margin - top: -13px;
    z - index: 1033;
    background - color: #FFFFFF;
    display: block;
    border - radius: 50 %;
    opacity: .4;
    line - height: 11px;
    width: 25px;
    height: 25px;
    outline: 0!important;
    text - align: center;
    padding: 3px;
    padding - top: 1px;
    font - weight: 300;
}

.alert button.close:hover {
    opacity: .55;
}

.alert.close ~span {
    display: block;
    max - width: 89 %;
}

.alert[data - notify= "container"] {
    padding: 10px 10px 10px 20px;
    border - radius: 4px;
}

.alert.alert -with-icon {
    padding - left: 65px;
}

.alert - info {
    background - color: #6eb1bf;
}

.alert - success {
    background - color: #a1e82c;
}

.alert - warning {
    background - color: #ff8f00;
}

.alert - danger {
    background - color: #fc727a;
}

.nav > li > a: hover,
.nav > li > a:focus {
    background - color: transparent;
}

.navbar {
    border: 0;
    font - size: 16px;
    border - radius: 0;
}

.navbar > .container.navbar - brand,
.navbar > .container - fluid.navbar - brand {
    margin - left: 0;
}

.navbar.navbar - brand {
    font - weight: 400;
    margin: 5px 0px;
    padding: 15px 15px;
    font - size: 20px;
}

.navbar.navbar - nav > li > a {
    padding: 10px 15px;
    margin: 10px 3px;
    position: relative;
}

.navbar.navbar - nav > li > a.btn {
    margin: 15px 3px;
    padding: 8px 16px;
}

.navbar.navbar - nav > li > a.btn - round {
    margin: 16px 3px;
}

.navbar.navbar - nav > li > a[class^= "fa"] {
    font - size: 19px;
    position: relative;
    line - height: 16px;
    top: 1px;
}

.navbar.navbar - nav.notification {
    position: absolute;
    background - color: #FB404B;
    text - align: center;
    border - radius: 10px;
    min - width: 18px;
    padding: 0 5px;
    height: 18px;
    font - size: 12px;
    color: #FFFFFF;
    font - weight: bold;
    line - height: 18px;
    top: 0px;
    left: 7px;
}

.navbar.btn {
    margin: 15px 3px;
    font - size: 14px;
}

.navbar.btn - simple {
    font - size: 16px;
}

.navbar.fixed {
    width: calc(100 % - $sidebar - width);
    right: 0;
    left: auto;
    border - radius: 0;
}

.navbar - nav > li > .dropdown - menu {
    border - radius: 10px;
    margin - top: -5px;
}

.navbar - transparent.navbar - brand, [class*= "navbar-ct"].navbar - brand {
    color: #FFFFFF;
    opacity: 0.9;
    filter: alpha(opacity = 90);
}

.navbar - transparent.navbar - brand: focus, .navbar - transparent.navbar - brand: hover, [class*= "navbar-ct"].navbar - brand: focus, [class*= "navbar-ct"].navbar - brand:hover {
    background - color: transparent;
    opacity: 1;
    filter: alpha(opacity = 100);
}

.navbar - transparent.navbar - nav > li > a: not(.btn), [class*= "navbar-ct"].navbar - nav > li > a: not(.btn) {
    color: #FFFFFF;
    border - color: #FFFFFF;
    opacity: 0.8;
    filter: alpha(opacity = 80);
}

.navbar - transparent.navbar - nav > .active > a: not(.btn),
.navbar - transparent.navbar - nav > .active > a: hover: not(.btn),
.navbar - transparent.navbar - nav > .active > a: focus: not(.btn),
.navbar - transparent.navbar - nav > li > a: hover: not(.btn),
.navbar - transparent.navbar - nav > li > a: focus: not(.btn), [class*= "navbar-ct"].navbar - nav > .active > a: not(.btn),
    [class*= "navbar-ct"].navbar - nav > .active > a: hover: not(.btn),
        [class*= "navbar-ct"].navbar - nav > .active > a: focus: not(.btn),
            [class*= "navbar-ct"].navbar - nav > li > a: hover: not(.btn),
                [class*= "navbar-ct"].navbar - nav > li > a: focus: not(.btn) {
    background - color: transparent;
    border - radius: 3px;
    color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity = 100);
}

.navbar - transparent.navbar - nav.nav > li > a.btn: hover, [class*= "navbar-ct"].navbar - nav.nav > li > a.btn:hover {
    background - color: transparent;
}

.navbar - transparent.navbar - nav > .dropdown > a.caret,
.navbar - transparent.navbar - nav > .dropdown > a: hover.caret,
.navbar - transparent.navbar - nav > .dropdown > a: focus.caret, [class*= "navbar-ct"].navbar - nav > .dropdown > a.caret,
    [class*= "navbar-ct"].navbar - nav > .dropdown > a: hover.caret,
        [class*= "navbar-ct"].navbar - nav > .dropdown > a: focus.caret {
    border - bottom - color: #FFFFFF;
    border - top - color: #FFFFFF;
}

.navbar - transparent.navbar - nav > .open > a,
.navbar - transparent.navbar - nav > .open > a: hover,
.navbar - transparent.navbar - nav > .open > a: focus, [class*= "navbar-ct"].navbar - nav > .open > a,
    [class*= "navbar-ct"].navbar - nav > .open > a: hover,
        [class*= "navbar-ct"].navbar - nav > .open > a:focus {
    background - color: transparent;
    color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity = 100);
}

.navbar - transparent.btn -default, [class*= "navbar-ct"].btn -default {
    color: #FFFFFF;
    border - color: #FFFFFF;
}

.navbar - transparent.btn -default.btn - fill, [class*= "navbar-ct"].btn -default.btn - fill {
    color: #9A9A9A;
    background - color: #FFFFFF;
    opacity: 0.9;
    filter: alpha(opacity = 90);
}

.navbar - transparent.btn -default.btn - fill: hover,
.navbar - transparent.btn -default.btn - fill: focus,
.navbar - transparent.btn -default.btn - fill: active,
.navbar - transparent.btn -default.btn - fill.active,
.navbar - transparent.open.dropdown - toggle.btn - fill.btn -default, [class*= "navbar-ct"].btn -default.btn - fill: hover,
    [class*= "navbar-ct"].btn -default.btn - fill: focus,
        [class*= "navbar-ct"].btn -default.btn - fill: active,
            [class*= "navbar-ct"].btn -default.btn - fill.active,
                [class*= "navbar-ct"].open.dropdown - toggle.btn - fill.btn -default {
    border - color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity = 100);
}

.navbar - transparent.dropdown - menu.divider {
    background - color: rgba(255, 255, 255, 0.2);
}

.nav - open.nav.caret {
    border - bottom - color: #FFFFFF;
    border - top - color: #FFFFFF;
}

.navbar -default {
    background - color: rgba(255, 255, 255, 0.96);
    border - bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar -default .navbar - nav > li > a: not(.btn) {
    color: #9A9A9A;
}

.navbar -default .navbar - nav > .active > a,
.navbar -default .navbar - nav > .active > a: not(.btn): hover,
.navbar -default .navbar - nav > .active > a: not(.btn): focus,
.navbar -default .navbar - nav > li > a: not(.btn): hover,
.navbar -default .navbar - nav > li > a: not(.btn):focus {
    background - color: transparent;
    border - radius: 3px;
    color: #1DC7EA;
    opacity: 1;
    filter: alpha(opacity = 100);
}

.navbar -default .navbar - nav > .dropdown > a: hover.caret,
.navbar -default .navbar - nav > .dropdown > a: focus.caret {
    border - bottom - color: #1DC7EA;
    border - top - color: #1DC7EA;
}

.navbar -default .navbar - nav > .open > a,
.navbar -default .navbar - nav > .open > a: hover,
.navbar -default .navbar - nav > .open > a:focus {
    background - color: transparent;
    color: #1DC7EA;
}

.navbar -default .navbar - nav.navbar - toggle: hover, .navbar -default .navbar - nav.navbar - toggle:focus {
    background - color: transparent;
}

.navbar -default: not(.navbar - transparent).btn -default:hover {
    color: #1DC7EA;
    border - color: #1DC7EA;
}

.navbar -default: not(.navbar - transparent).btn - neutral,
.navbar -default: not(.navbar - transparent).btn - neutral: hover,
.navbar -default: not(.navbar - transparent).btn - neutral:active {
    color: #9A9A9A;
}

/*      Navbar with icons            */
.navbar - icons.navbar.navbar - brand {
    margin - top: 12px;
    margin - bottom: 12px;
}

.navbar - icons.navbar - nav > li > a {
    text - align: center;
    padding: 6px 15px;
    margin: 6px 3px;
}

.navbar - icons.navbar - nav[class^= "pe"] {
    font - size: 30px;
    position: relative;
}

.navbar - icons.navbar - nav p {
    margin: 3px 0 0;
}

.navbar - form {
    -webkit - box - shadow: none;
    box - shadow: none;
}

.navbar - form.form - control {
    border - radius: 0;
    border: 0;
    padding: 0;
    background - color: transparent;
    height: 22px;
    font - size: 16px;
    line - height: 1.5;
    color: #E3E3E3;
}

.navbar - transparent.navbar - form.form - control,
    [class*= "navbar-ct"].navbar - form.form - control {
    color: #FFFFFF;
    border: 0;
    border - bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.navbar - ct - blue {
    background - color: #4091e2;
}

.navbar - ct - azure {
    background - color: #63d8f1;
}

.navbar - ct - green {
    background - color: #a1e82c;
}

.navbar - ct - orange {
    background - color: #ffbc67;
}

.navbar - ct - red {
    background - color: #fc727a;
}

.navbar - transparent {
    padding - top: 15px;
    background - color: transparent;
    border - bottom: 1px solid transparent;
}

.navbar - toggle {
    margin - top: 19px;
    margin - bottom: 19px;
    border: 0;
}

.navbar - toggle.icon - bar {
    background - color: #FFFFFF;
}

.navbar - toggle.navbar - collapse,
.navbar - toggle.navbar - form {
    border - color: transparent;
}

.navbar - toggle.navbar -default .navbar - toggle: hover,
.navbar - toggle.navbar -default .navbar - toggle:focus {
    background - color: transparent;
}

.footer {
    background - color: #FFFFFF;
    line - height: 20px;
}

.footer nav > ul {
    list - style: none;
    margin: 0;
    padding: 0;
    font - weight: normal;
}

.footer nav > ul a: not(.btn) {
    color: #9A9A9A;
    display: block;
    margin - bottom: 3px;
}

.footer nav > ul a: not(.btn): hover, .footer nav > ul a: not(.btn):focus {
    color: #777777;
}

.footer.social - area {
    padding: 15px 0;
}

.footer.social - area h5 {
    padding - bottom: 15px;
}

.footer.social - area > a: not(.btn) {
    color: #9A9A9A;
    display: inline - block;
    vertical - align: top;
    padding: 10px 5px;
    font - size: 20px;
    font - weight: normal;
    line - height: 20px;
    text - align: center;
}

.footer.social - area > a: not(.btn): hover, .footer.social - area > a: not(.btn):focus {
    color: #777777;
}

.footer.copyright {
    color: #777777;
    padding: 10px 15px;
    margin: 10px 3px;
    line - height: 20px;
    font - size: 14px;
}

.footer hr {
    border - color: #DDDDDD;
}

.footer.title {
    color: #777777;
}

.footer -default {
    background - color: #F5F5F5;
}

.footer: not(.footer - big) nav > ul {
    font - size: 14px;
}

.footer: not(.footer - big) nav > ul li {
    margin - left: 20px;
    float: left;
}

.footer: not(.footer - big) nav > ul a {
    padding: 10px 0px;
    margin: 10px 10px 10px 0px;
}

.dropdown - menu {
    visibility: hidden;
    margin: 0;
    padding: 0;
    border - radius: 10px;
    display: block;
    z - index: 9000;
    position: absolute;
    opacity: 0;
    filter: alpha(opacity = 0);
    -webkit - box - shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);
    box - shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);
}

.open.dropdown - menu {
    opacity: 1;
    filter: alpha(opacity = 100);
    visibility: visible;
}

.select.dropdown - menu {
    border - radius: 0 0 10px 10px;
    -webkit - box - shadow: none;
    box - shadow: none;
    -webkit - transform - origin: 50 % -40px;
    -moz - transform - origin: 50 % -40px;
    -o - transform - origin: 50 % -40px;
    -ms - transform - origin: 50 % -40px;
    transform - origin: 50 % -40px;
    -webkit - transform: scale(1);
    -moz - transform: scale(1);
    -o - transform: scale(1);
    -ms - transform: scale(1);
    transform: scale(1);
    margin - top: -20px;
}

.select.open.dropdown - menu {
    margin - top: -1px;
}

.dropdown - menu > li > a {
    padding: 8px 16px;
    color: #333333;
}

.dropdown - menu > li > a img {
    margin - top: -3px;
}

.dropdown - menu > li > a:focus {
    outline: 0!important;
}

.btn - group.select.dropdown - menu {
    min - width: 100 %;
}

.dropdown - menu > li: first - child > a {
    border - top - left - radius: 10px;
    border - top - right - radius: 10px;
}

.dropdown - menu > li: last - child > a {
    border - bottom - left - radius: 10px;
    border - bottom - right - radius: 10px;
}

.select.dropdown - menu > li: first - child > a {
    border - radius: 0;
    border - bottom: 0 none;
}

.dropdown - menu > li > a: hover,
.dropdown - menu > li > a:focus {
    background - color: #F5F5F5;
    color: #333333;
    opacity: 1;
    text - decoration: none;
}

.dropdown - menu.dropdown - blue > li > a: hover,
.dropdown - menu.dropdown - blue > li > a:focus {
    background - color: rgba(52, 114, 247, 0.2);
}

.dropdown - menu.dropdown - azure > li > a: hover,
.dropdown - menu.dropdown - azure > li > a:focus {
    background - color: rgba(29, 199, 234, 0.2);
}

.dropdown - menu.ct - green > li > a: hover,
.dropdown - menu.ct - green > li > a:focus {
    background - color: rgba(135, 203, 22, 0.2);
}

.dropdown - menu.dropdown - orange > li > a: hover,
.dropdown - menu.dropdown - orange > li > a:focus {
    background - color: rgba(255, 149, 0, 0.2);
}

.dropdown - menu.dropdown - red > li > a: hover,
.dropdown - menu.dropdown - red > li > a:focus {
    background - color: rgba(255, 74, 85, 0.2);
}

.dropdown -with-icons > li > a {
    padding - left: 0px;
    line - height: 28px;
}

.dropdown -with-icons i {
    text - align: center;
    line - height: 28px;
    float: left;
}

.dropdown -with-icons i[class^= "pe-"] {
    font - size: 24px;
    width: 46px;
}

.dropdown -with-icons i[class^= "fa"] {
    font - size: 14px;
    width: 38px;
}

.btn - group.select {
    overflow: hidden;
}

.btn - group.select.open {
    overflow: visible;
}

@media(min - width: 992px) {
    .navbar - form {
        margin - top: 21px;
        margin - bottom: 21px;
        padding - left: 5px;
        padding - right: 5px;
    }
    .navbar - nav > li > .dropdown - menu, .dropdown.dropdown - menu {
        -webkit - transform: scale(0);
        -moz - transform: scale(0);
        -o - transform: scale(0);
        -ms - transform: scale(0);
        transform: scale(0);
    }
    .navbar - nav > li.open > .dropdown - menu, .dropdown.open.dropdown - menu {
        -webkit - transform: scale(1);
        -moz - transform: scale(1);
        -o - transform: scale(1);
        -ms - transform: scale(1);
        transform: scale(1);
        -webkit - transform - origin: 29px - 50px;
        -moz - transform - origin: 29px - 50px;
        -o - transform - origin: 29px - 50px;
        -ms - transform - origin: 29px - 50px;
        transform - origin: 29px - 50px;
    }
    .sidebar.nav - mobile - menu {
        display: none;
    }
    .footer nav {
        margin - left: 15px;
    }
    .navbar - nav > li > .dropdown - menu:before {
        border - bottom: 11px solid rgba(0, 0, 0, 0.2);
        border - left: 11px solid transparent;
        border - right: 11px solid transparent;
        content: "";
        display: inline - block;
        position: absolute;
        left: 12px;
        top: -11px;
    }
    .navbar - nav > li > .dropdown - menu:after {
        border - bottom: 11px solid #FFFFFF;
        border - left: 11px solid transparent;
        border - right: 11px solid transparent;
        content: "";
        display: inline - block;
        position: absolute;
        left: 12px;
        top: -10px;
    }
    .navbar - nav.navbar - right > li > .dropdown - menu:before {
        left: auto;
        right: 12px;
    }
    .navbar - nav.navbar - right > li > .dropdown - menu:after {
        left: auto;
        right: 12px;
    }
    .footer: not(.footer - big) nav > ul li: first - child {
        margin - left: 0;
    }
    body > .navbar - collapse.collapse {
        display: none!important;
    }
    .card form[class*= "col-"] {
        padding: 6px;
    }
    .card form[class*= "col-"]: first - child {
        padding - left: 15px;
    }
    .card form[class*= "col-"]: last - child {
        padding - right: 15px;
    }
}

/*          Changes for small display      */
@media(max - width: 991px) {
    .main - panel {
        width: 100 %;
    }
    .navbar - transparent {
        padding - top: 15px;
        background - color: rgba(0, 0, 0, 0.45);
    }
    body {
        position: relative;
    }
    .main - panel {
        left: 0;
    }
    .navbar.container {
        left: 0;
        width: 100 %;
        position: relative;
    }
    .navbar.navbar - collapse.collapse,
    .navbar.navbar - collapse.collapse.in,
    .navbar.navbar - collapse.collapsing {
        display: none!important;
    }
    .navbar - nav > li {
        float: none;
        position: relative;
        display: block;
    }
    .navbar - collapse,
    .sidebar {
        position: fixed;
        display: block;
        top: 0;
        height: 100 %;
        right: 0;
        left: auto;
        z - index: 1032;
        visibility: visible;
        background - color: #999;
        overflow - y: visible;
        border - top: none;
        text - align: left;
        padding: 0;
        -webkit - transform: translate3d(260px, 0, 0);
        -moz - transform: translate3d(260px, 0, 0);
        -o - transform: translate3d(260px, 0, 0);
        -ms - transform: translate3d(260px, 0, 0);
        transform: translate3d(260px, 0, 0);
    }
    .navbar - collapse > ul,
    .sidebar > ul {
        position: relative;
        z - index: 4;
        overflow - y: scroll;
        height: calc(100vh - 61px);
        width: 100 %;
    }
    .navbar - collapse:: before,
    .sidebar::before {
        top: 0;
        left: 0;
        height: 100 %;
        width: 100 %;
        position: absolute;
        background - color: #282828;
        display: block;
        content: "";
        z - index: 1;
    }
    .navbar - collapse.logo,
    .sidebar.logo {
        position: relative;
        z - index: 4;
    }
    .navbar - collapse.nav li > a,
    .sidebar.nav li > a {
        padding: 10px 15px;
    }
    .navbar - collapse.nav,
    .sidebar.nav {
        margin - top: 10px;
    }
    .nav - open.navbar - collapse,
    .nav - open.sidebar {
        -webkit - transform: translate3d(0px, 0, 0);
        -moz - transform: translate3d(0px, 0, 0);
        -o - transform: translate3d(0px, 0, 0);
        -ms - transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    .nav - open.navbar.container {
        left: -250px;
    }
    .nav - open.main - panel {
        left: 0;
        -webkit - transform: translate3d(-260px, 0, 0);
        -moz - transform: translate3d(-260px, 0, 0);
        -o - transform: translate3d(-260px, 0, 0);
        -ms - transform: translate3d(-260px, 0, 0);
        transform: translate3d(-260px, 0, 0);
    }
    .nav - open.menu - on - left.sidebar {
        -webkit - transform: translate3d(0px, 0, 0);
        -moz - transform: translate3d(0px, 0, 0);
        -o - transform: translate3d(0px, 0, 0);
        -ms - transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    .nav - open.menu - on - left.main - panel {
        left: 0;
        -webkit - transform: translate3d(260px, 0, 0);
        -moz - transform: translate3d(260px, 0, 0);
        -o - transform: translate3d(260px, 0, 0);
        -ms - transform: translate3d(260px, 0, 0);
        transform: translate3d(260px, 0, 0);
    }
    .menu - on - left.sidebar {
        left: 0;
        right: auto;
        -webkit - transform: translate3d(-260px, 0, 0);
        -moz - transform: translate3d(-260px, 0, 0);
        -o - transform: translate3d(-260px, 0, 0);
        -ms - transform: translate3d(-260px, 0, 0);
        transform: translate3d(-260px, 0, 0);
    }
    .menu - on - left #bodyClick {
        right: 0;
        left: auto;
    }
    .navbar - toggle.icon - bar {
        display: block;
        position: relative;
        background: #fff;
        width: 24px;
        height: 2px;
        border - radius: 1px;
        margin: 0 auto;
    }
    .navbar - header.navbar - toggle {
        margin: 10px 15px 10px 0;
        width: 40px;
        height: 40px;
    }
    .dropdown - menu.divider {
        background - color: rgba(229, 229, 229, 0.15);
    }
    .navbar - nav {
        margin: 1px 0;
        float: none!important;
    }
    .navbar - nav.open.dropdown - menu > li > a {
        padding: 10px 15px 10px 60px;
        border - radius: 4px;
        color: inherit;
    }
    .navbar - nav.open.dropdown - menu > li > a: hover, .navbar - nav.open.dropdown - menu > li > a:focus {
        background - color: transparent;
    }
    [class*= "navbar-"].navbar - nav > li > a,
        [class*= "navbar-"].navbar - nav > li > a: hover,
            [class*= "navbar-"].navbar - nav > li > a: focus,
                [class*= "navbar-"].navbar - nav.active > a,
                [class*= "navbar-"].navbar - nav.active > a: hover,
                    [class*= "navbar-"].navbar - nav.active > a: focus,
                        [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a,
                        [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a: hover,
                            [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a: focus,
                                [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a:active {
        color: white;
    }
    [class*= "navbar-"].navbar - nav > li > a,
        [class*= "navbar-"].navbar - nav > li > a: hover,
            [class*= "navbar-"].navbar - nav > li > a:focus {
        opacity: .7;
        background - color: transparent;
        outline: none;
    }
    [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a: hover,
        [class*= "navbar-"].navbar - nav.open.dropdown - menu > li > a:focus {
        background - color: rgba(255, 255, 255, 0.1);
    }
    [class*= "navbar-"].navbar - nav.navbar - nav.open.dropdown - menu > li > a:active {
        opacity: 1;
    }
    [class*= "navbar-"].navbar - nav.dropdown > a: hover.caret {
        border - bottom - color: #fff;
        border - top - color: #fff;
    }
    [class*= "navbar-"].navbar - nav.dropdown > a: active.caret {
        border - bottom - color: white;
        border - top - color: white;
    }
    .dropdown - menu {
        display: none;
    }
    .navbar - fixed - top {
        -webkit - backface - visibility: hidden;
    }
    #bodyClick {
        height: 100 %;
        width: calc(100 % - 260px);
        position: fixed;
        opacity: 0;
        top: 0;
        left: 0;
        content: "";
        z - index: 9999;
        overflow - x: hidden;
    }
    .social - line.btn {
        margin: 0 0 10px 0;
    }
    .subscribe - line.form - control {
        margin: 0 0 10px 0;
    }
    .social - line.pull - right {
        float: none;
    }
    .footer nav.pull - left {
        float: none!important;
    }
    .footer: not(.footer - big) nav > ul li {
        float: none;
    }
    .social - area.pull - right {
        float: none!important;
    }
    .form - control + .form - control - feedback {
        margin - top: -8px;
    }
    .navbar - toggle: hover, .navbar - toggle:focus {
        background - color: transparent!important;
    }
    .btn.dropdown - toggle {
        margin - bottom: 0;
    }
    .media - post.author {
        width: 20 %;
        float: none!important;
        display: block;
        margin: 0 auto 10px;
    }
    .media - post.media - body {
        width: 100 %;
    }
    .navbar - collapse.collapse {
        height: 100 % !important;
    }
    .navbar - collapse.collapse.in {
        display: block;
    }
    .navbar - header.collapse, .navbar - toggle {
        display: block!important;
    }
    .navbar - header {
        float: none;
    }
    .navbar - nav.open.dropdown - menu {
        position: static;
        float: none;
        width: auto;
        margin - top: 0;
        background - color: transparent;
        border: 0;
        -webkit - box - shadow: none;
        box - shadow: none;
    }
    .navbar - collapse.nav p {
        font - size: 14px;
        margin: 0;
    }
    .navbar - collapse[class^= "pe-7s-"] {
        float: left;
        font - size: 20px;
        margin - right: 10px;
    }
}

@media(min - width: 992px) {
    .table - full - width {
        margin - left: -15px;
        margin - right: -15px;
    }
    .table - responsive {
        overflow: visible;
    }
    .navbar - nav p {
        line - height: normal;
        margin: 0;
    }
}

@media(max - width: 991px) {
    .table - responsive {
        width: 100 %;
        margin - bottom: 15px;
        overflow - x: scroll;
        overflow - y: hidden;
        -ms - overflow - style: -ms - autohiding - scrollbar;
        -webkit - overflow - scrolling: touch;
    }
}

code
{
    background: white;
    font - family: Andale mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Lucida Console, Monaco, Consolas, Droid Sans monospace, Monospace;
}

.panel - heading
{
    background: white!important;
}

.table > thead > tr > th
{
    border - bottom: 1px solid #ddd;
}

.form - horizontal.control - label, .table > thead > tr > th
{
    color: #828282;
}

.blue
{
    color: #478fca;
}

.red
{
    color: #dd5a43;
}

.panel - body
{
    overflow - x: auto;
}

.sidebar ul.nav > li > a > i {
    font - size: 20px; margin - top: -8px
}

div.alert.question
{
    min - height: 52px;
    padding: 16px;
}

div.alert.question > a
{
    margin - top: -6px;
}

ul.pagination
{
    display: table;
    margin: auto;
}

.panel - footer
{
    background: #fbfbfb;
}

.panel[type = "datagrid"].panel - body
{
    padding - left: 0;
    padding - right: 0;
}