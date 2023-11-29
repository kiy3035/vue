<template>
    <div id="wrap">
			<div class="contents">
			
				<div class="top">
						<h1><div th:text="${pgmNm}"/></h1>
						<div id="pgmCd" th:text="${pgmcd}" hidden/>
					<div class="tr_btns"  style="display: flex;">
						<div th:if="${AUT_INQ_TAG=='Y'}" class="fontN">
							<button id="btn_search" class="blue"><span>조회</span></button>
						</div>
						<div th:if="${AUT_INP_TAG=='Y'}" class="fontN">
							<button id="btn_save" class="sblue"><span>저장</span></button>
						</div>
					</div>
				</div>
				
				<div class="top2_bd_box">
					<table class="df_vertical_tb">
						<colgroup>
							<col width="10%">
							<col width="12%">
							<col width="10%">
							<col width="12%">
							<col width="10%">
							<col width="12%">
							<col width="10%">
							<col width="12%">
						</colgroup>
						<tr>
							<th class="tT bl_ns">물류센터코드</th>
							<td>
								<input type="text" id="CENTER_CD" name="CENTER_CD" class="w100" disabled>
							</td>
							<th>물류센터명/약어</th>
							<td>
								<input type="text" id="CENTER_NM" name="CENTER_NM" class="w50"  disabled> 
								<input type="text" id="CENTER_ARB" name="CENTER_ARB" class="w45" maxlength="20">
							</td>
							<th>업태 / 업종</th>
							<td>
								<input type="text" id="BIZ_TYP" name="BIZ_TYP" size="15" class="w50" disabled> 
								<input type="text" id="BIZ_KND" name="BIZ_KND" size="15" class="w45" disabled>
							</td>				
							<th>대표자 / 사업자번호</th>
							<td>
								<input type="text" id="REG_DIR_NM" name="REG_DIR_NM" class="w45" disabled> 
								<input type="text" id="BIZ_REG_NO" name="BIZ_REG_NO" class="w50" disabled>
							</td>			
						</tr>
						<tr>
							<th class="tT bl_ns">시행업체</th>
							<td>
								<select id="COMP_CD" name="COMP_CD" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:100%;"></select>
							</td>
							<th class="tT bl_ns">센터구분</th>
							<td>
								<select id="CENTER_TYP" name="CENTER_TYP" class="combo" queryKey="Combo.commonLux" comboParams="WG" isAll='Y' style="width:100%;"></select>
							</td>		
							<th>우편번호</th>
							<td>
								<input type="text" id="ZIP_CD" name="ZIP_CD" class="w100" disabled>
							</td>
							<th>주소</th>
							<td>
								<input type="text" id="ADDR_D1" name="ADDR_D1" class="w100" disabled>
							</td>					
						</tr>
						<tr>
							<th>상세주소</th>
							<td>
								<input type="text" id="ADDR_D2" name="ADDR_D2" class="w100" disabled>
							</td>							
							<th>센터장</th>
							<td>
								<input type="text" id="CENTER_TOP_NM" name="CENTER_TOP_NM" class="w100" maxlength="15">
							</td>
							<th>전화번호</th>
							<td>
								<input type="text" id="TEL_NO" name="TEL_NO" size="21" class="w100" disabled>
							</td>
							<th>팩스번호</th>
							<td>
								<input type="text" id="FAX_NO" name="FAX_NO" size="21" class="w100" disabled>
							</td>							
						</tr>
						<tr>
							<th>센터장휴대폰번호</th>
							<td>
								<input type="text" id="CENTER_TOP_MOBILENO" name="CENTER_TOP_MOBILENO" class="w100" maxlength="13" >
							</td>
							<th>센터장전화번호</th>
							<td>
								<input type="text" id="CENTER_TOP_TELNO" name="CENTER_TOP_TELNO" class="w100" maxlength="13">
							</td>
							<th class="tT bl_ns">신고인(보세운송EDI) ID</th>
							<td>
								<input type="text" id="EDI_BONDTCARRY_ID" name="EDI_BONDTCARRY_ID" class="w100" maxlength="20"> 
							</td>	
							<th>신고인(보세운송EDI) P/W</th>
							<td>
								<input type="text" id="EDI_BONDTCARRY_PSWD" name="EDI_BONDTCARRY_PSWD" class="w100" maxlength="20">
							</td>						
						</tr>
						<tr>
							<th>전체면적(평/PLT)</th>
							<td>
								<input type="text" id="CENTER_SQUARE" name="CENTER_SQUARE" maxlength="10" style= "text-align:right" class="w100" >
							</td>
							<th>관할세관</th>
							<td>
								<table class="code_tb">
											<colgroup>
												<col style="width:40%">
												<col style="width:60%">
											</colgroup>
											<tr>
												<td class="pdR_5">
													<div class="top2_sch">
														<input type="text" id="KCS_COMP" name="KCS_COMP" class="hide" alt="KCS_COMP" autocomplete="off" maxlength="3">
														<i id="btn_KCS_COMP" class="fas fa-search" onClick="codeSearchPopS('KCS_COMP')">
														</i>
													</div>
												</td>
												<td class="pdR_5">
													<input type="text" id="KCS_COMP_NM" name="KCS_COMP_NM" class="w100" disabled >
												</td>
											</tr>
								</table>
							</td>
							<th>관할세관과</th>
							<td>
								<table class="code_tb">
											<colgroup>
												<col style="width:40%">
												<col style="width:60%">
											</colgroup>
											<tr>
												<td class="pdR_5">
													<div class="top2_sch">
														<input type="text" id="KCS_DEPT_CD" name="KCS_DEPT_CD" class="hide" alt="KCS_DEPT_CD" autocomplete="off" maxlength="3">
														<i id="btn_KCS_DEPT_CD" class="fas fa-search" onClick="codeSearchPopS('KCS_DEPT_CD')">
														</i>
													</div>
												</td>
												<td class="pdR_5">
													<input type="text" id="KCS_DEPT_NM" name="KCS_DEPT_NM" class="w100" disabled >
												</td>
											</tr>
								</table>
							</td>
							<th>송수신 식별자</th>
							<td>
								<input type="text" id="EDI_RCIV_ID" name="EDI_RCIV_ID" class="w100" maxlength="20">
							</td>							
						</tr>
						<tr>
							<th class="tT bl_ns">장치장코드</th>
							<td>
								<input type="text" id="BONDWH_CD" name="BONDWH_CD" maxLength="8" class="w100"> 
							</td>
							<th>지구코드</th>
							<td>
								<input type="text" id="DISTRICT_CD" name="DISTRICT_CD" maxLength="8" class="w100" disabled>
							</td>
							<th>사용유무</th>
							<td>
								<select id="USE_YN" name="USE_YN" disabled> <!-- 대우테이블 데이터이기 떄문에 disabled -->
									<option value="N">N</option>
									<option value="Y">Y</option>
								</select>
							</td>
							<th>SMS ID</th>
							<td>
								<input type="text" id="SMS_ID" name="SMS_ID" class="w100" maxlength="16">
							</td>						
						</tr>
						<tr>
							<th>KT(KL)NET 접속ID</th>
							<td>
								<input type="text" id="EDI_CONT_ID" name="EDI_CONT_ID" class="w100" maxlength="20">
							</td>
							<th>KT(KL)NET 접속PSWD</th>
							<td>
								<input type="text" id="EDI_CONT_PSWD" name="EDI_CONT_PSWD" class="w100" maxlength="20">
							</td>
							<th class="tT bl_ns">PREFIX</th>
							<td>
								<input type="text" id="CENTER_PREFIX" name="CENTER_PREFIX" maxlength="4" 
									placeholder="소문자,한글 입력안됨" class="w100" />
							</td>			
							<th class="tT bl_ns">보세구역구분</th>
							<td>
								<select id="BOND_TYP" name="BOND_TYP" class="combo" queryKey="Combo.commonLux" comboParams="WE9" isAll='Y' style="width:100%;">
									
								</select>
							</td>				
						</tr>
						<tr>
							<th class="tT bl_ns">센터부서</th>
							<td>
								<table>
									<colgroup>
										<col width="30%">
										
									</colgroup>
									<tr>
										<td class="pdR_5">
											<div class="top2_sch">
												<input type="text" id="WH_ORGAN_DEPT" name="WH_ORGAN_DEPT" maxlength="10"/> 
												<i id="btn_ACT_CD" onclick="codeSearchPopS('WH_ORGAN_DEPT')" class="fas fa-search"></i>
											</div>
										</td>
			
									</tr>
								</table>
							</td>
							<th>센터조직</th>
							<td>
								<input type="text" id="WH_ORGAN_CD" name="WH_ORGAN_CD" class="w100" maxlength="14">
							</td>
							<th>사업장</th>
							<td>
								<table>
									<colgroup>
										<col width="30%">
										
									</colgroup>
									<tr>
										<td class="pdR_5">
											<div class="top2_sch">
												<input type="text" id="SAUP_NO" name="SAUP_NO" maxlength="4"/> 
												<i id="btn_ACT_CD" onclick="codeSearchPopS('SAUP_NO')" class="fas fa-search"></i>
											</div>
										</td>
			
									</tr>
								</table>
							</td>
							<th>운송부서</th>
							<td>
								<input type="text" id="TP_ORGAN_DEPT" name="TP_ORGAN_DEPT" class="w100" maxlength="7">
							</td>					
						</tr>
						<tr>
							<th>운송조직</th>
							<td>
								<input type="text" id="TP_ORGAN_CD" name="TP_ORGAN_CD" class="w100" maxlength="14">
							</td>							
							<th>비고</th>
							<td colspan= "5">
								<input type="text" id="BIGO" name="BIGO" class="w100" maxlength="50">
							</td>
						</tr>
					</table>
				</div>
				
				<div class = "celltop_box">
					<div class = "flex alignC justiE">
							<div class="btn-adBox">
							<div th:if="${AUT_DEL_TAG=='Y'}" class="fontN">
								<span><img src="/images/button/btn_sq_del.png" id="btn_del"/></span>
							</div>	
						</div>
					</div>
				</div>
				<div id="MasterGrid" class="grid_wrap" style="width: 100%;"> </div>
			</div>
		</div>
</template>