### 7-1 Pattern

Là 1 cấu trúc được áp dụng rộng rãi làm cơ sở cho các dự án lớn. Bạn có tất cả các partials của mình được sắp xếp thành 7 thư mục khác nhau và 1 file chính main.scss nơi import tất cả các partials và chúng ta sẽ chỉ cần biên dịch duy nhất file này từ SASS sang CSS.

### Dưới đây là ví dụ cho thư mục sass:

sass/
|
|– abstracts/ (or utilities/) `(Biến số),(Function tính toán),(Nhóm min giữa nhiều CSS)`
| |– \_variables.scss // Sass Variables
| |– \_functions.scss // Sass Functions
| |– \_mixins.scss // Sass Mixins
|
|– base/ `(Khởi tạo mặc đinh/ Tiêu chuẩn hóa),(Tiêu chuẩn font chữ, quy chuẩn)`
| |– \_reset.scss // Reset/normalize
| |– \_typography.scss // Typography rules
|
|– components/ (or modules/) `(Thành phần cấu trúc dùng chung)`
| |– \_buttons.scss // Buttons
| |– \_carousel.scss // Carousel
| |– \_slider.scss // Slider
|
|– layout/ `(Cấu trúc định dạng các layout cơ sở)`
| |– \_navigation.scss // Navigation
| |– \_grid.scss // Grid system
| |– \_header.scss // Header
| |– \_footer.scss // Footer
| |– \_sidebar.scss // Sidebar
| |– \_forms.scss // Forms
|
|– pages/ `(Định dạng cho các trang đặc định. Lưu ý, để tránh chồng lấn ghi đè, thì nên sử dụng nested CSS)`
| |– \_home.scss // Home specific styles
| |– \_about.scss // About specific styles
| |– \_contact.scss // Contact specific styles
|
|– themes/ `(Các tiêu chuẩn cho theme, nếu có...)`
| |– \_theme.scss // Default theme
| |– \_admin.scss // Admin theme
|
|– vendors/ `(Thư viện từ các đối tác, nếu có...)`
| |– \_bootstrap.scss // Bootstrap
| |– \_jquery-ui.scss // jQuery UI
|
– main.scss // Main Sass file `(Tái tổ hợp các thành phần làm một)`

### Abstracts (hay Ultilities) :

Chứa các CSS helper bao gồm biến, functions, mixins....

### Base :

Chứa các boilerplate code (có thể hiểu chung là code được áp dụng chung cho toàn bộ project của bạn như typographic rules hay reset rules....

### Components (hay modules) :

Thư mục này chứa code cho các thành phần (components) mà có thể reusable cho trang của bạn như buttons, forms, cards, v.v..

### Layout :

Chứa code định nghĩa cho layout của project như header, footer, navigation, grid,....

### Pages:

Một dự án lớn sẽ chứa rất nhiều page khác nhau với nhiều style khác nhau. Đây là nơi bạn định nghĩa style cho từng trang.

### Themes:

Nếu trang của bạn có nhiều hơn 1 theme, bạn sẽ định nghĩa tại đây.

### Vendors:

Chứa các files từ bên thứ ba ( thư viện, framworks) bạn sử dụng như Normalize, Bootstrap, jQuery,....Tuy nhiên trong thực tế bạn sẽ thường xuyên override code ( hiểu đơn giản là sửa một vài phần code theo ý mình). Nên nếu cần thiết, bạn có thể tạo thêm 1 folder khác vendors-extensions/ để chứa các override files của mình.

### Và cuối cùng là main.scss :

@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/slider';

@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';

### Chú ý : Một lần nữa hãy nhớ rằng không cần thêm đuôi \_ hay .scss khi import

## Các tiêu chuẩn trong SCSS/SASS

1. Variables - biến trong css `$varName: value`
2. Nested CSS
   name {
   `* {} = name * {}`
   `classname {} = name classname {}`
   `> classname {} = name > classname {}`
   `+ classname {} = name + classname {}`
   `~ classname {} = name ~ classname {}`
   `div.classname {} = name div.classname {}`
   `div#idname {} = name div#idname {}`
   `......`
   `......`
   `a:link {}`
   `a:active {}`
   `a:hover {}`
   `a:visited {}`
   `p::after{content:"yo"}{}`
   `p::before {}`
   `input:checked {}`
   `input:disabled {}`
   `input:enabled {}`
   `input:focus{}`
   `input:in-range {}`
   `input:out-of-range {}`
   `input:valid {}`
   `input:invalid {}`
   `input:optional {}`
   `input:required {}`
   `input:read-only {}`
   `input:read-write{}`
   `&:empty {} name:empty {}`
   `&:hover p {} = name:hover p {}`
   `&::first-letter {}`
   `&::first-line {}`
   `&:first-of-type {}`
   `&:last-of-type {}`
   `&:lang(en) p {}`
   `&:first-child {}`
   `&:last-child {}`
   `&:nth-child(2) {}`
   `&:nth-child(3n+1) {}`
   `&:nth-last-child(2) {}`
   `&:nth-of-type(2) {}`
   `&:nth-last-of-type(2) {}`
   `&:only-of-type {}`
   `&:only-child {}`
   }
   `&:not(span) {}`
   `&:root {}`
   `&::selection {}`
   `&:target {}`

3. Partials: các file thành phần có cấu trúc \_partials.scss `@import 'partials.scss'`

4. Mixin: cấu trúc nhỏ nhất dùng chung giữa các CSS
   `@mixin mixinName {}`  
   => `name {@include mixinName; newcss: value}`

5. Extend/Inheritance: thừa kế các CSS từ thành phần khác
   `@extend name {}`
   => `newName {@extend: name; newcss: value}`

6. Functon in CSS (String, Numberic, List, Map, Selector, Intro, Color)
   `@function grid-width($n) {`
   `@return $n * $variable`
   `}`

7. Operators `+,-,*,/`
   ......
