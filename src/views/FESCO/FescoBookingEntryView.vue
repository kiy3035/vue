<template>
	<div id="wrap">
		<div class="contents">
			<div class="top">
				<h1 style="margin-bottom:35px;">Booking Entry</h1>
				<!-- <div id="pgmCd" v-text="pgmcd" hidden></div> -->
				<div class="tr_btns" style="display: flex;">
					<!-- <div v-if="AUT_INQ_TAG==='Y'" class="fontN"> -->
						<button id="btn_search" class="sukTest"><span>조회</span></button>
					<!-- </div> -->
					<!-- <div v-if="AUT_INP_TAG==='Y'" class="fontN"> -->
						<button id="btn_save" class="sukTest"><span>저장</span></button>
					<!-- </div> -->
					</div>
				</div>
				<div class="top2_bd_box">
					<table class="df_vertical_tb" style="width:100%">
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
							<th style="background-color: skyblue;">Booking No.</th>
							<td>
								<input type="text" id="BOOKING_NO" name="BOOKING_NO" class="w50"  disabled>
							</td>
							<th style="background-color: skyblue;">Order No</th>
							<td>
								<input type="text" id="ORDER_NO" name="ORDER_NO" class="w50"  disabled>
							</td>
							<th style="background-color: skyblue;">Status</th>
							<td>
								<input type="text" id="STATUS" name="STATUS" class="w50"  disabled>
							</td>
							<td colspan="2" style="border-left: 1px solid #b0b0b0;"></td>

						</tr>
					</table>
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
							<th class="tT bl_ns">SALES</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="SALES1" name="SALES1" class="w100" alt="SALES1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="SALES2" name="SALES2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>Door P.I.C / TEL</th>
							<td colspan="3">
								<table class="code_tb">
									<colgroup>
										<col style="width:20%;">
										<col style="width:30%">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="DOOR1" name="DOOR1" class="w100" alt="DOOR1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="DOOR2" name="DOOR2" class="w100" disabled >
										</td>
										<td style="border-bottom:0px;">/&nbsp;
											<input type="text" id="DOOR3" name="DOOR3" class="w100" disabled style="width:92%">
										</td>
									</tr>
								</table>
							</td>
							<th>Door Date/Time</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="DATE" name="DATE" class="w100" alt="DATE" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="TIME" name="TIME" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>				
						</tr>
						<tr>
							<th class="tT bl_ns">Service</th>
							<td>
								<div class="top2_sch" style="display:flex;">
									<select id="SERVICE_TEST" name="SERVICE_TEST" class="combo w100" style="width:90%; margin-left:2%">
										<option v-for="item in serviceOptions" :value="item.value" :key="item.value">{{ item.label }}</option>
									</select>
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="SERVICE1" disabled>ES
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="SERVICE2" disabled>W
								</div>
							</td>
							<th class="tT bl_ns">VSL / VOY name</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="VSL" name="VSL" class="w100" alt="VSL" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="VOY" name="VOY" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>		
							<th>Trucker</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="TRUCKER1" name="TRUCKER1" class="w100" alt="TRUCKER1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="TRUCKER2" name="TRUCKER2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>Door Place</th>
							<td>
								<input type="text" id="DOOR_PLACE" name="DOOR_PLACE" class="w100" disabled>
							</td>					
						</tr>
						<tr>
							<th>POR / DLV</th>
							<td colspan="3">
								<table class="code_tb">
									<colgroup>
										<col style="width:15%;">
										<col style="width:35%">
										<col style="width:15%">
										<col style="width:35%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="POR1" name="POR1" class="w100" alt="POR1" autocomplete="off" maxlength="3" disabled style="margin-left:2%">
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="POR2" name="POR2" class="w100" disabled >
										</td>
										<td style="border-bottom:0px;">/&nbsp;
											<input type="text" id="POR3" name="POR3" class="w100" disabled style="width:85%">
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="POR4" name="POR4" class="w100" disabled style="width:92%">
										</td>
									</tr>
								</table>
							</td>							
							<th>POL / POD</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="POL1" name="POL1" class="w100" alt="POL1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="POL2" name="POL2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>ETD / ETA</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="ETD" name="ETD" class="w100" alt="ETD" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="ETA" name="ETA" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<th></th>
							<td>
								<div class="top2_sch" style="display:flex;">
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="CH" disabled>CH
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="KZ" disabled>KZ
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="EU" disabled>EU
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px;" id="FB" disabled>FB
								</div>
							</td>
							<th>Order Date</th>
							<td>
								<input type="text" id="ORDER_DATE" name="ORDER_DATE" class="w100" maxlength="13" disabled>
							</td>
							<th class="tT bl_ns">PIC</th>
							<td>
								<input type="text" id="PIC" name="PIC" class="w100" maxlength="20" disabled> 
							</td>	
							<td colspan="2" style="border-left: 1px solid #b0b0b0;">
							</td>						
						</tr>
						<tr>
							<th>DELIVERY TERMINAL</th>
							<td>
								<input type="text" id="DELIVERY" name="DELIVERY" maxlength="10" style= "text-align:right" class="w100" disabled>
							</td>
							<th>Closing Time</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="CLOSING_TIME1" name="ETD" class="w100" alt="CLOSING_TIME1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="CLOSING_TIME2" name="CLOSING_TIME2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>PRE-BOOKING NO</th>
							<td>
								<input type="text" id="PRE_BOOKING_NO" name="PRE_BOOKING_NO" class="w100" maxlength="20" disabled>
							</td>
							<th>LEASE NO.</th>
							<td>
								<input type="text" id="LEASE_NO" name="LEASE_NO" class="w100" maxlength="20" disabled>
							</td>							
						</tr>
						<tr>
							<th class="tT bl_ns">Shipper</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="SHIPPER1" name="SHIPPER1" class="w100" alt="SHIPPER1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="SHIPPER2" name="SHIPPER2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>Actual Shipper</th>
							<td>
								<input type="text" id="ACTUAL" name="ACTUAL" maxLength="8" class="w100" disabled>
							</td>
							<th>Shipment NO.</th>
							<td>
								<input type="text" id="SHIPMENT" name="SHIPMENT" maxLength="8" class="w100" disabled>
							</td>
							<th>Approval No.</th>
							<td>
								<input type="text" id="APPROVAL" name="APPROVAL" class="w100" maxlength="16" disabled>
							</td>						
						</tr>
						<tr>
							<th>P.I.C / TEL</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:20%;">
										<col style="width:30%">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="PIC1" name="PIC1" class="w100" alt="PIC1" autocomplete="off" maxlength="3" disabled style="margin-left:2%">
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="PIC2" name="PIC2" class="w100" disabled >
										</td>
										<td style="border-bottom:0px;">/&nbsp;
											<input type="text" id="PIC3" name="PIC3" class="w100" disabled style="width:77%">
										</td>
									</tr>
								</table>
							</td>
							<th>E-MAIL</th>
							<td>
								<input type="text" id="EMAIL" name="EMAIL" class="w100" maxlength="20" disabled>
							</td>
							<th class="tT bl_ns">CL</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="CL1" name="CL1" class="w100" alt="CL1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="CL2" name="CL2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>			
							<th class="tT bl_ns">BA</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:40%;">
										<col style="width:60%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="BA1" name="BA1" class="w100" alt="BA1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="BA2" name="BA2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>			
						</tr>
						<tr>
							<th class="tT bl_ns">EMPTY PICK UP</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="BA1" name="EMPTY1" class="w100" alt="EMPTY1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="EMPTY2" name="EMPTY2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th class="tT bl_ns">FULL RETURN DEPOT</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="FULL1" name="FULL1" class="w100" alt="FULL1" autocomplete="off" maxlength="3" disabled>
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<input type="text" id="FULL2" name="FULL2" class="w100" disabled >
										</td>
									</tr>
								</table>
							</td>
							<th>최종 수입 등관지</th>
							<td>
								<select id="SERVICE" name="SERVICE" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
							</td>
							<td colspan="2" style="border-left: 1px solid #b0b0b0;">
							</td>					
						</tr>
						<tr>
							<th class="tT bl_ns">수출 신고 타입 / 선사 컨테이너 사용 여부</th>
							<td>
								<table class="code_tb" style="width:100%">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<select id="SERVICE" name="SERVICE" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<select id="SERVICE" name="SERVICE" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
										</td>
									</tr>
								</table>
							</td>
							<th>CARGO TYPE</th>
							<td>
								<select id="SERVICE" name="SERVICE" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
							</td>
							<th class="tT bl_ns">Service TERM</th>
							<td>
								<table class="code_tb" style="width:100%">
									<colgroup>
										<col style="width:50%;">
										<col style="width:50%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<select id="SERVICE_TERM1" name="SERVICE_TERM1" class="combo w100" style="width:95%;">
													<option v-for="item in serviceTermOptions" :value="item.value" :key="item.value">{{ item.label }}</option>
												</select>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<select id="SERVICE_TERM1" name="SERVICE_TERM1" class="combo w100" style="width:95%;">
												<option v-for="item in serviceTermOptions" :value="item.value" :key="item.value">{{ item.label }}</option>
											</select>
										</td>
									</tr>
								</table>
							</td>
							<th class="tT bl_ns">F.TERM/THC Russia</th>
							<td>
								<table class="code_tb" style="width:100%">
									<colgroup>
										<col style="width:60%;">
										<col style="width:40%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<select id="RUSSIA1" name="RUSSIA1" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<select id="RUSSIA2" name="RUSSIA2" class="combo w100" queryKey="Combo.compCd" isAll='Y' style="width:95%;" disabled></select>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<th>PKG / WGT / CBM</th>
							<td>
								<table class="code_tb">
									<colgroup>
										<col style="width:25%;">
										<col style="width:25%">
										<col style="width:25%">
										<col style="width:25%">
									</colgroup>
									<tr>
										<td style="border-bottom:0px;">
											<div class="top2_sch">
												<input type="text" id="POR1" name="POR1" class="w100" alt="POR1" autocomplete="off" maxlength="3" disabled style="margin-left:2%">
												<i id="btn_KCS_COMP" class="fas fa-search"> 
													<!-- onClick="codeSearchPopS('KCS_COMP')"> -->
												</i>
											</div>
										</td>
										<td style="border-bottom:0px;">
											<select id="PKG_TEST" name="PKG_TEST" class="combo w100" style="width:95%;">
												<option v-for="item in packageOptions" :value="item.value" :key="item.value">{{ item.label }}</option>
											</select>
										</td>
										<td style="border-bottom:0px;">/
											<input type="text" id="POR2" name="POR2" class="w100" disabled style="width:80%">
										</td>
										<td style="border-bottom:0px;">/
											<input type="text" id="POR4" name="POR4" class="w100" disabled style="width:80%">
										</td>
									</tr>
								</table>
							</td>	
							<th>Cntr Kind</th>
							<td>
								<div class="top2_sch" style="display:flex;">
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px; transform: scale(0.6)" id="CH" disabled>RF
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px; transform: scale(0.6)" id="KZ" disabled>DG
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px; transform: scale(0.6)" id="EU" disabled>OG
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px; transform: scale(0.6)" id="FB" disabled>TK
									<input type="checkbox" style="margin-left: -30px; margin-right:-35px; transform: scale(0.6)" id="FB" disabled>FO
								</div>
							</td>
							<th>HS CODE</th>
							<td>
								<input type="text" id="FULL2" name="FULL2" class="w100" disabled >
							</td>						
							<th>COMMODITY</th>
							<td>
								<input type="text" id="FULL2" name="FULL2" class="w100" disabled >
							</td>						
						</tr>
						<tr>
							<th>Remark</th>
							<td colspan="7">
								<input type="text" id="FULL2" name="FULL2" class="w100" disabled style="width:99.5%">
								<input type="text" id="FULL2" name="FULL2" class="w100" disabled style="width:99.5%">
							</td>
						</tr>
						<tr>
							<th colspan="8" style="font-weight: bold; font-size: 18px;">Container Information</th>
						</tr>
					</table>
				</div>
				
				<div id="MasterGrid" class="grid_wrap" style="width: 100%;margin-top: -10px; margin-bottom: 10px;"> 
					<button @click="addRow" style="width:5%;">Add Row</button>
					<ag-grid-vue
						class="ag-theme-alpine"
						style="height: 200px"
						:columnDefs="columnDefs.value"
						:defaultColDef="defaultColDef"
						:getRowClass="getRowClass"
						rowData="rowData.value"
						rowSelection="multiple"
						animateRows="true"
						@cell-clicked="cellWasClicked"
						@grid-ready="onGridReady">
					</ag-grid-vue>
					<!-- <ag-grid-vue
						class="ag-theme-alpine"
						style="height: 500px"
						:columnDefs="columnDefs.value"
						:rowData="rowData.value"
						:defaultColDef="defaultColDef"
						rowSelection="multiple"
						animateRows="true"
						@cell-clicked="cellWasClicked"
						@grid-ready="onGridReady">
					</ag-grid-vue> -->
				</div>

			</div>
		</div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, ref } from "vue";
// import { reactive, onMounted, ref } from "vue";
import axios from 'axios';

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
  const gridApi = ref(null); // Optional - for accessing Grid's API
  const rowData = ref([]);

  // Obtain API from grid's onGridReady event
  const onGridReady = (params) => {
    gridApi.value = params.api;
  };

  const getRowClass = (params) => {
    // params.node가 신규로 추가된 행이면, 클래스를 추가합니다.
    if (params.node.added) {
      return 'new-row'; // 'new-row'는 새로운 행에 대한 클래스입니다.
    }

    // 그 외의 경우 빈 문자열을 반환합니다.
    return '';
  };

  // Each Column Definition results in one Column.
  const columnDefs = reactive({
    value: [
      { field: "Prefix" },
      { field: "Size / Type" },
      { field: "Qty." },
      { field: "F/E" },
      { field: "UN No" },
      { field: "CLASS" },
      { field: "UN No2" },
      { field: "CLASS2" },
      { field: "UN No3" },
      { field: "CLASS3" },
      { field: "OH" },
      { field: "OWR" },
      { field: "Temperature" },
      { field: "Vent" },
    ],
  });

  // DefaultColDef sets props common to all Columns
  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
  };

  const addRow = () => {
    const newItem = {
      Prefix: "",
      "Size / Type": "",
      "Qty.": "",
      "F/E": "",
      "UN No": "",
      "CLASS": "",
      "UN No2": "",
      "CLASS2": "",
      "UN No3": "",
      "CLASS3": "",
      "OH": "",
      "OWR": "",
      "Temperature": "",
      "Vent": "",
    };
    rowData.value = [...rowData.value, newItem];
    console.log('Added row:', newItem);
    // Optional: Refresh the grid after adding a new row
    if (gridApi.value) {
      gridApi.value.setRowData(rowData.value);
    }
  };

  // Example load data from server
  // onMounted(() => {
  //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //     .then((result) => result.json())
  //     .then((remoteRowData) => (rowData.value = remoteRowData));
  // });

  return {
    onGridReady,
    columnDefs,
    rowData,
    defaultColDef,
    addRow,
    cellWasClicked: (event) => { // Example of consuming Grid Event
      console.log("cell was clicked", event);
    },
    getRowClass, // 추가된 부분
  };
},
data() {
  return {
    serviceOptions: [],
    packageOptions: [],
    serviceTermOptions: [],
  };
},

  mounted() {
    // 컴포넌트가 마운트될 때 실행되는 로직
    this.toggleNavbarElement(false); // .navbar 엘리먼트를 숨김

    /*
    this.fetchData('SVC').then(data => {
      this.serviceOptions = data;
    });

    this.fetchData('PKG').then(data => {
      this.packageOptions = data;
    });

    this.fetchData('STM').then(data => {
      this.serviceTermOptions = data;
    });
    */
	this.fetchData('A2').then(data => {
		this.serviceOptions = data.map(item => ({
			value: item.clss_cd, // clss_cd를 value로 사용
			// label: item.code_nm, // code_nm을 label로 사용
			label: `${item.code_nm} (${item.code_cd})`,
		}));
	});

	this.fetchData('A3').then(data => {
		this.packageOptions = data.map(item => ({
			value: item.clss_cd,
			label: `${item.code_nm} (${item.code_cd})`
		}));
	});

	this.fetchData('A6').then(data => {
		this.serviceTermOptions = data.map(item =>({
			value: item.clss_cd,
			label: `${item.code_nm} (${item.code_cd})`
		}));
	});

  },
  beforeUnmount() {
    // 컴포넌트가 언마운트되기 전에 실행되는 로직
    this.toggleNavbarElement(true); // .navbar 엘리먼트를 표시
  },
  methods: {
    toggleNavbarElement(show) {
      // .navbar 클래스를 가진 엘리먼트를 찾아서 표시 또는 숨김
      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        navbarElement.style.display = show ? 'block' : 'none';
      }
    },
    fetchData(clssCd) {
      // 서버에서 데이터를 가져오는 axios 호출
      return axios.get(`http://localhost:7001/${clssCd}`)
        .then(response => response.data)
        .catch(error => {
          console.error('Error fetching data:', error);
          return [];
        });
    },
  },
};
</script>



<style scoped>

#wrap {
  min-width: 1024px;
}
#wrap .contents {
  padding: 7px 22px 0 22px;
  background: #ffffff;
}
#wrap .contents .top {
  position: relative;
  padding-top: 10px;
}

body, div, p, h1, h2, h3, h4, h5, h6, ul, ol, dl, dt, dd, li, table, tr, th, td, caption, thead, tfoot, tbody, form, fieldset, legend, input, select, textarea, blockquote, address {
  margin: 0;
  padding: 0px;
}
#wrap .contents .top .tr_btns {
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 8px;
}
.sukTest{
  margin-top: 100px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.top2_bd_box {
  padding-bottom: 15px;
}
.celltop_box {
  padding-bottom: 5px;
}
table.df_vertical_tb {
  border-top: 1px solid #b0b0b0;
  border-right: 1px solid #b0b0b0;
}
table.df_vertical_tb th.bl_ns {
  background: #f8f8f8 no-repeat 8px center;
  padding-left: 15px;
}
table.df_vertical_tb th {
  text-align: left;
  font-size: 13px;
  color: #333333;
  background: #f8f8f8;
  box-sizing: border-box;
  height: 32px;
border-bottom: 1px solid #b0b0b0;
border-right: 1px solid #b0b0b0;
border-left: 1px solid #b0b0b0;
padding-left: 15px;
}
td {
  display: table-cell;
  vertical-align: inherit;
border-bottom: 1px solid #b0b0b0;
}
table.df_vertical_tb > tbody > tr > td {
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  padding: 4px 6px;
}
input, select {
  height: 23px;
width:95%;
  line-height: 1;
  box-sizing: border-box;
  color: #222;
  letter-spacing: -0.1px;
  padding: 0 3px;
  font-size: 12px;
}
input, textarea {
  outline-style: none;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;

}
</style>