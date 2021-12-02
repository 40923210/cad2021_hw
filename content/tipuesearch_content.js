var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/40923210/cad2021_hw \n 網站連結:\xa0 https://40923210.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Work progress', 'text': '9/30 \n 建立倉儲 \n 10/7 \n 1.新增task及hwpages \n 2.新增2b學員網站連結 \n 10/14 \n 新增2b學員網站連結code \n 10/21 \n 1.新增run \n 2.修改套件名稱 \n 11/2 \n 1.新增inventor緣由及介紹 \n 2.新增solidworks緣由及介紹 \n 3.用inventor繪製零件(25%) \n 11/3 \n 1.用inventor繪製零件(70%) \n 2.新增work progress \n 11/4 \n 用inventor 繪製零件(85%) \n 11/6 \n 用solidwoks繪製零件(85%) \n 11/7 \n 1.剪載sw影片並上傳 \n 2.剪載inventor影片並上傳 \n 11/8 \n 1.剪inventor 零組件繪圖教學影片並上傳 \n 2.剪sw零組件繪圖教學影片並上傳 \n 3.操作CoppeliaSim 並錄製上傳inventor轉入教學 \n 4.操作CoppeliaSim 並錄製上傳sw轉入教學 \n', 'tags': '', 'url': 'Work progress.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '\n from browser import html\nfrom browser import document\nimport random\n\nbrython_div = document["brython_div"]\n\nurl = "https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/8a27e6885ee1a5074bcf864d741679afeac796c4/2b_w2_stud_list.txt"\n\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\n\n# 根據 href 與 content 將 html 元件中的 anchor 插入頁面\ndef makeLink(href, content):\n    brython_div <= html.A(content, href=href)\n    #brython_div <= html.BR()\n\n\n# 從學員資料中隨機取出 10 位學員的網頁進行查核\nselect = 10\nrandom.shuffle(data)\ndata = data[:select]\ncourse = "cad2021"\n\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    content = str(num)\n    hwhref = "https://"+ str(account) + ".github.io/"+course+ "_hw"\n    repohref = "https://github.com/"+ str(account) +"/"+course +"_hw"\n    brython_div <= "repo: "\n    makeLink(repohref, content)\n    brython_div <= " www: "\n    makeLink(hwhref, content)\n    brython_div <= html.BR() \n 40723126 \n 40723135 \n 40723217 \n 40732331 \n 40823114 \n 40823115 \n 40823117 \n 40823119 \n 40823122 \n 40823127 \n 40823146 \n 40823148 \n 40823215 \n 40871106 \n 40923201 \n 40923203 \n 40923204 \n 40923205 \n 40923206 \n 40923207 \n 40923208 \n 40923209 \n 40923210 \n 40923211 \n 40923212 \n 40923213 \n 40923214 \n 40923216 \n 40923217 \n 40923218 \n 40923219 \n 40923220 \n 40923221 \n 40923223 \n 40923224 \n 40923225 \n 40923226 \n 40923227 \n 40923228 \n 40923229 \n 40923230 \n 40923231 \n 40923232 \n 40923233 \n 40923234 \n 40923235 \n 40923236 \n 40923237 \n 40923238 \n 40923239 \n 40923240 \n 40923241 \n 40923242 \n 40923243 \n 40923244 \n 40923245 \n 40923246 \n 40923247 \n 40923248 \n 40923249 \n 40923250 \n 40923251 \n 40923252 \n 40923253 \n 40971220 \n 40971227 \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Solidworks 繪圖', 'text': 'Solidworks緣起及介紹 \n SolidWorks公司成立於1993年12月，其總部設在美國麻州康克爾郡，西元1995年發表其第一款產品SolidWorks 95，1997年被達梭系統併購，SolidWorks公司現在是達梭系統的子公司。 ，運行在微軟 Windows 平台下的3D機械CAD 軟體。SolidWorks是熱門的CAD軟體之一。 \n \n 歷史及發佈時間 \n 1993:Solidworks公司成立 \n 1995:發布Solidworks 95 \n 1996: 發布Solidworks 96 \n 1996:發布Solidworks 97 \n 1997:發布Solidworks 97Plus \n 1997:發布Solidworks 98 \n 1998:發布Solidworks 98Plus \n 1998:發布Solidworks 99 \n 1999:發布Solidworks 2000 \n 2000:發布Solidworks 2001 \n 2001:發布Solidworks 2001Plus \n 2002:發布Solidworks 2003 \n 2003:發布Solidworks 2004 \n 2004:發布Solidworks 2005 \n 2005:發布Solidworks 2006 \n 2006:發布Solidworks 2007 \n 2007:發布Solidworks 2008 \n 2008:發布Solidworks 2009 \n 2009:發布Solidworks 2010 \n 2010:發布Solidworks 2011 \n 2011:發布Solidworks 2012 \n 2012:發布Solidworks 2013 \n 2013:發布Solidworks 2014 \n 2014:發布Solidworks 2015 \n 2015:發布Solidworks 2016 \n 2016:發布Solidworks 2017 \n 2017:發布Solidworks 2018 \n 2018:發布Solidworks 2019 \n 2019:發布Solidworks 2020 \n 2020:發布Solidworks 2021 \n \n \n', 'tags': '', 'url': 'Solidworks 繪圖.html'}, {'title': 'Solidworks 安裝配置', 'text': '我分到的第一個套件為Solidworks。以下為Solidworks套件下載安裝與配置 \n 影片: NFU - MDE - cad2021 - 40923210 - SW2020 下載安裝與配置 \n \n VPN申請 \n 首先↠ 進入 虎科大網站 \xa0\xa0↠選取 在校學生 (圖1)\xa0↠ 點 校務ecare平台 \xa0\xa0↠ 登入\xa0↠ 個人資訊及設定\xa0↠ SSL-VPN連線申請(圖2)\xa0 \n 圖1: \n 圖2: \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n \n', 'tags': '', 'url': 'Solidworks 安裝配置.html'}, {'title': 'Solidworks 操作流程', 'text': '分配到的第一套參數式 CAD 套件 Solidworks. \n 教學影片及流程:\xa0 NFU - MDE - cad2021 - 40923210 - SW2020 零組件繪圖教學影片 \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'Solidworks 操作流程.html'}, {'title': 'Inventor\xa0繪圖', 'text': 'Inventor緣起及介紹: \n Autodesk Inventor軟件是美國Autodesk公司於1999年底推出的三維可視化實體模擬軟件。 它包含三維建模 、信息管理、協同工作和技術支持等各種特徵。使用Autodesk Inventor可以創建三維模型 和二維工程圖、可以創建特徵、零件，還可以管理上千個零件和大型部件。Inventor 產品為 3D 機械設計、產品模擬、模具建立與設計溝通提供一套彈性且全方位的軟體。Inventor 能讓設計、視覺化及模擬產品，超越 3D 進化至數位原型製作。Inventor 產品符合成本效益且易學，為 3D 機械設計、CAD 生產力、設計溝通、產品模擬、佈線系統與鑄模設計提供一套彈性的軟體。 \n Inventor功能: \n 1. 整合直接 建模 和 參數式工作流程 。使用簡單的推/拉控制項，對導入的幾何圖形中的要素進行移動、旋轉、大小調整或縮放。 \n 2. AnyCAD  數據整合，使用任何3D CAD 系統中的資料，並保持關聯設計連結。 \n 3.iLogic支持規則驅動設計， 無需複雜的程式 即可使用iLogic來標準化和自動化設計流程並配置您的虛擬產品。 \n 4. 3D 標註 與  3D PDF 匯出 ，使用 3D 標註在 3D 模型中添加公差尺寸、註釋和其他工程細節。 \n 5.大型組件效能， 改進包括圖形交互速度加快 、 大型檔的打開時間縮短 ，這些都大大提升了設計流程中的工作效率。 \n 6. 機電整合 ，連結 Inventor 和 AutoCAD Electrical 的設計數據，達到機電一體化設計目的。 \n \n', 'tags': '', 'url': 'Inventor\xa0繪圖.html'}, {'title': 'Inventor 安裝配置', 'text': '我分到的第二個套件為inventor。以下為inventor的下載安裝及配置。 \n 影片: NFU - MDE - cad2021 - 40923210 - INVENTOR 套件下載安裝與配置影片 \n \n VPN申請 \n 首先↠ 進入 虎科大網站 \xa0\xa0↠選取 在校學生 (圖1)\xa0↠ 點 校務ecare平台 \xa0\xa0↠ 登入\xa0↠ 個人資訊及設定\xa0↠ SSL-VPN連線申請(圖2)\xa0 \n 圖1: \n 圖2: \n \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從 https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html 嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n', 'tags': '', 'url': 'Inventor 安裝配置.html'}, {'title': 'Inventor\xa0操作流程', 'text': '第二套參數式 CAD 套件 Inventor。 \n \n 教學影片及流程: NFU - MDE - cad2021 - 40923210 - inventor零組件繪圖教學影片 \n', 'tags': '', 'url': 'Inventor\xa0操作流程.html'}, {'title': '運動場景', 'text': 'CAD1(solidworks): \n 影片教學及操作: NFU - MDE - cad2021 - 40923210 - SW2020 零件轉入 CoppeliaSim 教學影片 \n \n CAD2(inventor): \n 影片教學及操作: NFU - MDE - cad2021 - 40923210 - inventor 零件轉入 CoppeliaSim 教學影片 \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'Wink', 'text': '1.下載debugmode wink \n 2.下載完後，打開wink應用程式，點選file，再點preferences \n \n 3.和sharex共用ffmpeg \n \n 4.按file，建新檔 \n \n 選取適當畫面大小後，按OK \n \n 按 Minimize To Tray 開始擷取關鍵影格 \n \n 對右下角 wink 圖示按右鍵 \n \n Capture Now 可選取單個影格 \n Start Timed Capture 開始定時擷取連續影格 \n Finish Capture 結束擷取 \n \n', 'tags': '', 'url': 'Wink.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}]};