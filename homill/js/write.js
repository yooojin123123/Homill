<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>글쓰기</title>
<style>
    body {
        margin: 0;
        background-color: #FEF7ED;
        font-family: Arial, sans-serif;
        box-sizing: border-box;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .header-left .back-btn {
        width: 40px; 
        height: 40px;
        border: 2px solid #333;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 20px;
    }

    .header-left .title {
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }

    .header-right .complete-btn {
        padding: 5px 15px;
        border-radius: 20px;
        border: 2px solid #333;
        background-color: #F7CFCF; /* 약간 핑크톤 배경 */
        cursor: pointer;
        font-size: 14px;
        color: #333;
        text-decoration: none;
    }

    .content {
        padding: 20px;
    }

    .write-box {
        border: 2px solid #333;
        padding: 20px;
        border-radius: 5px;
        background-color: #FEF7ED;
    }

    .write-box .title-label {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
    }

    .divider {
        border-bottom: 1px solid #333;
        margin: 10px 0;
    }

    .category-select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 10px 0;
    }

    .category-select span {
        font-size: 14px;
        color: #333;
    }

    .category-select .triangle {
        margin-left: 5px;
    }

    .text-area {
        margin: 10px 0;
        color: #666;
        font-size: 14px;
    }

    .text-area::before {
        content: "내용을 입력하세요.";
        color: #666;
    }

    /* 실제 텍스트 입력을 위한 textarea는 display:none;하고 추후 JS로 처리하거나 할 수 있음.
       여기서는 디자인만 일단 구성 */
    .text-area {
        border: none;
        background: none;
        width: 100%;
        height: 200px;
    }

    .media-btn {
        margin-top: 10px;
        width: 100px;
        height: 100px;
        border: 2px solid #333;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 12px;
        gap: 5px;
        cursor: pointer;
    }

    .media-btn .icon {
        font-size: 20px;
    }
</style>
</head>
<body>
    <header class="header">
        <div class="header-left">
            <!-- 뒤로가기 버튼 -->
            <div class="back-btn">←</div>
            <div class="title">글쓰기</div>
        </div>
        <!-- 완료 버튼 -->
        <a href="#" class="complete-btn">완료</a>
    </header>

    <div class="content">
        <div class="write-box">
            <div class="title-label">제목</div>
            <div class="divider"></div>
            
            <!-- 카테고리 선택 -->
            <div class="category-select" onclick="location.href='category_select.html'">
                <span>카테고리 선택</span><span class="triangle">▼</span>
            </div>
            <div class="divider"></div>

            <!-- 내용 입력 영역 (임시 div, 필요시 textarea 대체 가능) -->
            <div class="text-area"></div>

            <!-- 사진/동영상 버튼 -->
            <div class="media-btn">
                <div class="icon">📷</div>
                <div>사진/동영상</div>
            </div>
        </div>
    </div>
</body>
</html>
