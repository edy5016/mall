var user_locale="ko";
var DEFAULT_MULTILINGUAL_VALUE="nonamed";
var validation_param_cmpName="법인명";
var validation_param_grpName="그룹명";
var validation_param_deptName="부서명";
var validation_param_posName="직위명";
var validation_param_folderName="폴더명";
var validation_param_itemName="아이템명";
var validation_param_shareName="공유명";
var validation_alert_mostInput="#{fname}은(는) 반드시 입력해야 합니다.\n\n #{fname}을(를) 입력하세요.";
var validation_alert_invalid="#{fname}은(는) 공백 포함 한글 20글자, 영문 40글자 이하이어야 합니다..\n\n#{fname}을(를) 다시 입력하세요.";
var validation_alert_invalid2="#{fname}에 적합하지 않은 문자가 있습니다.\n\n#{fname}을(를) 다시 입력하세요.";
var validation_param_desc="설명";
var validation_param_grpDesc="그룹설명";
var validation_param_deptDesc="부서설명";
var validation_param_posDesc="직위설명";
var validation_param_job="담당업무";
var validation_alert_invalid3="#{fname}은(는) 공백 포함 한글 100글자, 영문 200글자 이하이어야 합니다. \n\n다시 입력하세요.";
var validation_param_empName="이름";
var validation_param_ceo="대표자";
var validation_param_manager="관리자 이름";
var validation_alert_invalid4="#{fname}은(는) 공백 포함 한글 10글자, 영문 20글자 이하이어야 합니다. \n\n다시 입력하세요.";
var validation_alert_mostInputId="아이디는 반드시 입력해야 합니다. \n\n아이디를 입력하세요.";
var validation_alert_invalidId="아이디는 3~20자 이어야 합니다. \n\n아이디를 다시 입력하세요.";
var validation_alert_invalidId2="아이디에는 공백을 넣을 수 없습니다. \n\n아이디를 다시 입력하세요.";
var validation_alert_invalidId3="아이디는 3~20자의 영문 소문자, 숫자와 특수문자(_-.) 만 사용할 수 있습니다. \n\n아이디를 다시 입력하세요.";
var validation_alert_invalidId4="systemadmin, root, mailer-daemon, postmaster는 사용 불가능한 아이디입니다.";
var validation_alert_mostInputCode="사원번호를 입력하세요.";
var validation_alert_invalidCode="사원번호는 30자 이하여야 합니다.\n\n사원번호를 다시 입력하세요.";
var validation_alert_invalidCode2="사원번호에는 공백을 넣을 수 없습니다. \n\n사원번호를 다시 입력하세요.";
var validation_alert_invalidCode3='사원번호는 30자 이하의 영문, 숫자와 특수문자(_-.) 만 사용할 수 있습니다. \n\n사원번호를 다시 입력하세요.';
var validation_alert_mostInputPassword="비밀번호는 반드시 입력해야 합니다. \n\n비밀번호를 입력하세요.";
var validation_alert_invalidPassword="비밀번호는 4~12자 이어야 합니다. \n\n비밀번호를  다시 입력하세요.";
var validation_alert_invalidPassword2="비밀번호에는 공백을 넣을 수 없습니다. \n\n비밀번호를 다시 입력하세요.";
var validation_alert_invalidPassword3="비밀번호는 4~12자의 영문 소문자와 숫자만 사용할 수 있습니다. \n\n비밀번호를  다시 입력하세요.";
var validation_alert_invalidPassword4="비밀번호는 영문과 숫자의 조합입니다. 보안 정책에 위배되어 사용할 수 없습니다. \n\n비밀번호를 다시 입력하세요.";
var validation_alert_repeat="비밀번호에#{repStr}가(이) #{repNum}번이상 반복되고 있습니다. 보안 정책에 위배되어 사용할 수 없습니다. \n\ 비밀번호를 다시 입력하세요.";
var validation_alert_invalidPassword5="비밀번호와 비밀번호 확인이 일치하지 않습니다. \n\n비밀번호를 다시 입력하세요.";
var validation_param_email="메일주소";
var validation_alert_invalidEmail="올바른 메일 형식이 아닙니다. \n\n메일주소를 다시 입력하세요.";
var validation_alert_mostNumber="숫자만 입력 가능합니다.";
var validation_alert_phoneType="전화번호의 입력형식은 [9999-9999-9999] 입니다.";
var validation_alert_invalidBizNo="사업자등록번호는 3자리 숫자만 입력 가능합니다.";
var validation_alert_invalidBizNo2="사업자등록번호는 2자리 숫자만 입력 가능합니다.";
var validation_alert_invalidBizNo3="사업자등록번호는 5자리 숫자만 입력 가능합니다.";
var validation_alert_invalidBizNo4="사업자등록번호가 유효하지 않습니다.";
var validation_alert_invalidCmpNo="법인등록번호는 6자리 숫자만 입력 가능합니다.";
var validation_alert_invalidCmpNo2="법인등록번호는 7자리 숫자만 입력 가능합니다.";
var validation_alert_invalidCmpNo3="법인등록번호가 유효하지 않습니다.";
var validation_alert_invalidLicNo="주민등록번호 자릿수가 틀립니다. \n\n주민등록번호를 확인 후 다시 입력하세요.";
var validation_alert_invalidLicNo2="주민등록번호는 숫자로만 구성되어야 합니다. \n\n주민등록번호를 확인 후 다시 입력하세요.";
var validation_alert_invalidLicNo3="주민등록번호 성별부분을 잘못 입력하였습니다. \n\n주민등록번호를 확인 후 다시 입력하세요.";
var validation_alert_invalidLicNo4="유효하지 않은 주민등록번호입니다. \n\n주민등록번호를 확인 후 다시 입력하세요.";
var validation_alert_invalidNoConfirm="\n\n그래도 등록하시겠습니까?";
var validation_param_cmpTel="회사전화";
var validation_param_mobile="휴대전화";
var validation_param_invalidTel="#{tel}는 숫자로만 구성되어야 합니다. \n\n#{tel}를 확인 후 다시 입력하세요.";
var validation="도메인을 입력하세요.";
var validation_alert_invalidDomain="도메인 네임 규칙에 위배됩니다. \n\n다시 입력하세요.";
var validation_alert_invalidDomain2="올바른 형식이 아닙니다.{0}를 다시 입력하세요.";
var validation_alert_invalidDomain3="올바른 도메인 형식이 아닙니다.";
var validation_alert_solarLunar="음력.양력 구분을 선택하세요.";
var validation_alert_invalidEmail="올바른 메일 형식이 아닙니다. 메일주소를 다시 입력하세요.";
var validation_alert_mostInputUrl="URL은 반드시 입력해야 합니다.\n\nURL를 입력하세요.";
var validation_alert_invalidUrl="URL 은(는) 200글자 이하이어야 합니다. \n\n다시 입력하세요.";
var validation_alert_invalid="#{fname}는 공백 포함 한글 20글자, 영문 40글자 이하이어야 합니다.\n\n";
var validation_alert_commonInvalid="#{title}은(는) 공백 포함 #{iCount}글자 이하이어야 합니다.\n\n#{title}을(를) 다시 입력하세요.";
var validation_alert_commonInvalid2="#{title}은(는) 공백 포함 #{iCount}BYTE 이하이어야 합니다.\n\n#{title}을(를) 다시 입력하세요.";
var validation_alert_commonInvalid3="#{title}은(는) 공백 포함 한글#{iCount}글자 이하이어야 합니다.\n\n#{title}을(를) 다시 입력하세요.";
var validation_alert_commonInvalid4="#{title}은(는) 공백 포함 영문#{iCount}글자 이하이어야 합니다.\n\n#{title}을(를) 다시 입력하세요.";
var validation_alert_commonInvalid5="#{title}은(는) 공백 포함 숫자#{iCount}글자 이하이어야 합니다.\n\n#{title}을(를) 다시 입력하세요.";
var validation_alert_commonInvalid6="#{title}은(는) 공백 포함 한글 #{iCount}글자, 영문과 숫자 포함 #{iCount2}글자 이하이어야 합니다.\n\n";
var alongBase_alert_conflictUser="이미 추가된 사용입니다.";
var alongBase_alert_emptyResult="검색결과 없음";
var alongBase_button_searchClose="검색결과 닫기";
var alongBase_button_searchOpen="검색결과 열기";
var common_alert_conflict="이미 추가 되었습니다.";
var popupAddr_alert_selectAddr="주소를 선택하세요.";
var popupReport_alert_receiver="받는 사람을 선택하세요.";
var common_alert_popup="브라우저 팝업 차단 기능 혹은 팝업 차단 프로그램이 동작 중입니다. 팝업 차단 기능을 해제한 후 다시 시도하세요.";
var common_alert_inputSearchword="검색어를 입력하세요.";
var common_alert_mostInput="#{msg}를 입력하세요.";
var dateUtil_msg_am="오전";
var dateUtil_msg_hour="시";
var dateUtil_msg_minute="분";
var dateUtil_msg_am="오후";
var dateUtil_alert_term="시작일~ 종료일 이어야합니다.";
var dateUtil_alert_cantStartThanEnd="기간선택의 시작일자가 종료일자보다 클 수 없습니다.";
var dateUtil_alert_limit="#{limitDay} 일 이내로 검사하세요.";
var function_alert_exceed="내용이 초과되었습니다.\n 초과된 내용은 자동으로 삭제됩니다.";
var global_arr_boss="부서장";
var global_arr_manager="부서관리자";
var global_arr_receiver="문서담당자";
var global_arr_report="기록물관리자";
var paging_alt_prev="이전";
var paging_alt_next="다음";
var paging_alt_first="처음";
var paging_alt_last="마지막";
var popupcharge_alert_one="부서장은 1명만 지정 가능합니다. ";
var popupcharge_alert_selectJob="사용자의 담당자를 선택하세요.";
var popupMail_msg_to="받는사람 : ";
var popupMail_msg_cc="참조 : ";
var popupMail_msg_bcc="숨은참조 : ";
var popupMail_msg_conflict=" 이미 선택되었습니다.\n";
var common_alert_conflict="이미 추가되었습니다.";
var common_button_modify="수정";
var common_button_delete="삭제";
var common_button_save="저장";
var common_button_cancel="취소";
var common_button_confirm="확인";
var common_button_complete="완료";
var common_label_level="레벨";
var common_error_requestFail="요청실패";
var common_error_emptyResult="검색결과 없음";
var common_button_open="열기";
var common_button_close="닫기";
var tree_message_append="%s %s를 %s %s로 이동하시겠습니까?";
var tree_message_above="%s %s를 %s %s 상위로 이동하시겠습니까?";
var tree_message_below="%s %s를 %s %s 하위로 이동하시겠습니까?";
var common_alert_error="프로그램 오류가 발생하였습니다.\n 관리자에게 문의하세요.";
var common_alert_spaceNotEnough="용량이 초과하였습니다. 관리자에게 문의하세요.";
var common_alert_uploadInitialError="파일업로드 초기화 실패 오류";
var common_alert_httpSessionError="HTTP 프로토콜 세션 초기화 오류";
var common_alert_httpConnectionError="HTTP 프로토콜 연결 오류";
var common_alert_httpConnectinReattemptError="HTTP 프로토콜 연결 재시도 오류";
var common_alert_httpRequestError="HTTP 프로토콜 요청 오류";
var common_alert_httpHeaderAddError="HTTP 프로토콜 헤더 추가 요청 오류";
var common_alert_httpHeaderItemError="HTTP 프로토콜 헤더 항목 요청 오류";
var common_alert_httpSendginError="HTTP 프로토콜 전송 오류";
var common_alert_httpEndingError="HTTP 프로토콜 종료 오류";
var common_alert_httpHeaderSendingError="HTTP 프로토콜 헤더 전송 오류";
var common_alert_httpDataSendingError="HTTP 프로토콜 데이터 전송 오류";
var common_alert_httpTailSendingError="HTTP 프로토콜 TAIL 전송 오류";
var common_alert_uploadFileOpenError="업로드 파일 열기 오류(파일이 삭제되었는지 프로그램에서 열려있는지 확인하세요.)";
var common_alert_uploadFileReadError="업로드 파일 읽기 오류";
var common_alert_memoryQuotaError="내부메모리 할당 오류";
var common_alert_sendingMailCancelled="메일 발송이 취소되었습니다.";
var common_alert_webpageInputFieldAddError="웹페이지 입력필드 추가 오류";
var common_alert_webpageFooterAddError="웹페이지 FOOTER 추가 오류";
var common_alert_uploadFileWriteError="업로드 파일 쓰기 오류";
var common_alert_activex="ActiveX 모드로 전환하면 Flex 모드에서 첨부했던 파일은 다시 첨부해야 합니다.\r\n\r\nActiveX 모드로 전환하시겠습니까?";
var common_alert_flex="Flex 모드로 전환하면 ActiveX 모드에서 첨부했던 파일은 다시 첨부해야 합니다.\r\n\r\nFlex 모드로 전환하시겠습니까?";
var common_alert_selectFile="파일을 선택하세요.";
var common_alert_emptyLoginId="로그인 사용자 아이디를 입력 하세요.";
var common_alert_emptyPwd="비밀번호를 입력 하세요.";
var common_alert_maxlengthmsg="최대 길이를 초과 하였습니다 (최고 {0} Byte)";
var selectbox_organization="조직도";
var selectbox_contractList="주소록";
var selectbox_deptAddress="부서주소록";
var selectbox_pubAddress="공용주소록";
var selectbox_userGroup="사용자그룹";
var selectbox_userGroupGroup="사용자그룹(그룹)";
var selectbox_mylist="마이리스트";
var selectbox_mailUser="메일 전용사용자";
var selectbox_mail="대표메일";
var selectbox_position="직위";
var selectbox_office="직책";
var selectbox_duty="직무";
var selectbox_read="읽기";
var selectbox_readWrite="읽기/쓰기";
var selectbox_managePermission="관리자 권한";
var selectbox_noPermission="권한없음";
var selectbox_readWriteDelete="읽기/쓰기/삭제(관리자설정)";
var imageupload_alert_selectImageOnlyJpgGifPng="이미지파일을 첨부 해주세요!\n\n이미지파일은 JPG,GIF,PNG만 지원됩니다.";
var imageupload_alert_inputPath="경로를 입력해주세요.";
var imageupload_alert_onlySupportJpgGifPng="이미지파일은 JPG, GIF, PNG만 지원됩니다.";
var imageupload_alert_selectImage="이미지를 선택해주세요.";
var imageupload_alert_setDocMode="docMode를 지정해주세요.";
var imageupload_alert_firstPreview="먼저 미리보기를 해주세요.";
var imageupload_alert_limitImageWidth600="입력한 가능한 넓이는 600을 넘을 수 없습니다.";

var common_text_subDeptInclude="하위포함";
var common_alrt_searchInputOver="검색어를 {0}자 이상 입력 해주세요.";

var confirm_close_page="확인버튼을 누르면 페이지를 닫습니다."; 
var confirm_prev_page="확인버튼을 누르면 이전 페이지로 이동합니다.";
var common_alert_excess="You can select up to 8 people";

var commonPCSave="알집 사용자는 압축풀기시 알집의 [보기>언어변환]을 유니코드로 설정한 후 압축을 풀어야 합니다.";

var fav_label_title="관심 등록";
var fav_text_msg1="관심글로 등록합니다. 태그는 옵션으로 입력하지 않아도 됩니다.";
var fav_text_msg2="태그입력, 태그와 태그 사이는 (,)콤마로 구분하세요.";
var common_prompt_clipboard =" 클립보드에 복사되었습니다. \Ctrl+V\를 눌러 붙여넣기 해주세요.";
var common_alert_limit_text = "각 태그의 길이는 {0}자 이하로 입력해주십시오.";

//구글동기화
var address_alert_synchUnfinished="이전 동기화 작업이 현재 진행중입니다.";
var address_alert_synchFailed="동기화중 오류가 발생했습니다.";
var address_alert_unauthorized="구글인증에 실패했습니다. 다시 시도해주세요.";
var address_alert_googleDefaultGroup='구글기본 그룹을  수정 및 삭제 할 수 없습니다.';

//동영상 플레이어
var movie_install_silverlight="실버라이트를 설치하세요.";

var deptList_alert_Update = "부서 목록을 갱신하였습니다.";
var doc_alrt_search = "검색어를";

//LWJ 추가함
var common_alert_noAuth="권한이 없습니다.";
var common_text_organization="조직도";
var pop_alert_delFormMsg="삭제할 양식을 선택하세요.";
var pop_alert_modifyFormMsg="수정할 양식을 선택하세요.";
var pop_alert_ErrMsg="오류가 생겨 작업을 처리할 수 없습니다.";

var common_button_myPC="내 PC";
var common_button_fileBox="파일함";
var common_button_reset="초기화";
var common_text_attachedCapacity="첨부용량";
var common_text_attachedNumber="첨부개수";
var common_text_piece="개";
var common_text_dragFileAttach="첨부할 파일을 마우스로 끌어서 추가할 수 있습니다.";
//naon.js에서 사용하는 메시지
var common_naonjs_message_wait="잠시만 기다려 주세요.";
var common_naonjs_message_404="요청하신 페이지를 찾을 수 없습니다.";
var common_naonjs_message_500="서버에서 오류가 발생했습니다."; 
var common_naonjs_message_408="서버에서 응답이 없습니다.";
var common_naonjs_message_unknown="알 수 없는 오류가 발생했습니다.";
var common_naonjs_message_timeout="지정된 등답시간을 초과했습니다.";
var common_naonjs_message_download="다운로드에 실패했습니다.";
var common_naonjs_message_syserr = "시스템 오류가 발생되었습니다.";
var common_naonjs_message_inquire="자세한 사항은 시스템 관리자에게 문의하세요(admin@naonsoft.com)";
var common_text_sendComplete="기발송한 첨부파일의 첨부방식은 전환이 불가합니다.";