/*
Index:Home;About_Us:About Us;Feedback_Form:Feedback;Contact_Us:Contact Us;
*/
/*
TEXTHIGHLIGHT:#999999;BACKGROUNDHIGHLIGHT:none;TEXTMOUSEOVER:#0066FF;FONTFORMATBOLD:Bold;FILENAME:Vertical_Ruled_White;GRAPHIC:none;BACKGROUNDMOUSEOVER:none;FONTSTYLE:Arial,Helvetica,adobe-helvetica,Arial Narrow;ORIENTATION:VERTICAL;NUMPAGES:4;GRAPHICSTYLE:PLAINTEXT;STYLENAME:Vertical_Ruled;FONTSIZE:3;FONTCOLOR:#FFFFFF;GRAPHICCOLOR:none;VERTICALSPACE:3;HORIZONTALSPACE:6;COLORSCHEME:White;
*/

function Vertical_Nav_White_2textMouseOn(textObj)
{
textObj.style.color="#0066FF"; 
};
function Vertical_Nav_White_2textMouseOff(textObj)
{
textObj.style.color="#FFFFFF";
};


function Vertical_Nav_White_2isCurrentPage(currentLink)
{
var page = new String(window.location);
var currentPage = new String(currentLink);
var size = currentPage.length;
var tildePage = currentPage.substring(0, size - 5 ); 
tildePage += "~"; 
if(page.indexOf(currentPage) != -1 || page.indexOf(tildePage) != -1 ) { 
return true;
}
return false;	
}
<!-- Displays the navigation element !-->
function Vertical_Nav_White_2GetDisplayNavHTML() {
var strHTML = '';

strHTML += '<TABLE CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" >';
var nLinksPerRow = 6;
var nLinkGap = 1;
var nVerticalLinkGapInCell = 3;
var nHorizontalLinkGapInCell = 6;


var strTextAlignment = '';
if( "PLAINTEXT" != "ACCENT_LEFT"
&& !( "PLAINTEXT" == "LINES" && "VERTICAL" == "VERTICAL" )
&& !( "PLAINTEXT" == "ACCENT_BOTH" && "VERTICAL" == "HORIZONTAL") )
{
strTextAlignment = 'ALIGN="CENTER"';
} else {
strTextAlignment = 'ALIGN="LEFT"';
}
 
 
if (nLinkGap > 0) strHTML += '<TR><TD WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\"><IMG SRC=\"/tp.gif\" WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\" BORDER=\"0\"></TD></TR>';
strHTML += '<TR>';


strHTML += '<TD ' + strTextAlignment + ' VALIGN=\"MIDDLE\"  NOWRAP>';

strHTML += '<A TARGET="_parent" HREF=\"Index.html\" ';
if (navigator.userAgent.indexOf("IE") != -1) {
var style = ' STYLE=\"';
var underline = '';
var fontColor = '';

if(Vertical_Nav_White_2isCurrentPage('Index.html')) {
fontColor = 'color:#999999';
} else {
fontColor = 'color:#FFFFFF';

strHTML += ' onMouseOver=\"Vertical_Nav_White_2textMouseOn(this);\" '; 
strHTML += ' onMouseOut=\"Vertical_Nav_White_2textMouseOff(this);\" ';
	
}	


underline = 'text-decoration:none';

style += fontColor;
if (underline != '') {
style += ';' + underline;
}
strHTML += style + '\"';
}
strHTML += '>';
if (nVerticalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\"><BR>';
if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\" ALIGN=\"LEFT\">';



if (navigator.userAgent.indexOf("IE") == -1) {

if(Vertical_Nav_White_2isCurrentPage('Index.html')) {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#999999\" SIZE=\"3\">';
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#FFFFFF\" SIZE=\"3\">';
}
	
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" SIZE=\"3\">';
}
var strFormattingStart = ''; 
var strFormattingEnd = '';
	

strFormattingStart += '<B>';
strFormattingEnd = '</B>' + strFormattingEnd;

strHTML += strFormattingStart + "Home" + strFormattingEnd + '</FONT>';


if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\">';
if (nVerticalLinkGapInCell > 0) strHTML += '<BR><IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\">';
strHTML += '</A>';
strHTML += '</TD>';
 
strHTML += '</TR>';





var nLinksPerRow = 6;
var nLinkGap = 1;
var nVerticalLinkGapInCell = 3;
var nHorizontalLinkGapInCell = 6;


var strTextAlignment = '';
if( "PLAINTEXT" != "ACCENT_LEFT"
&& !( "PLAINTEXT" == "LINES" && "VERTICAL" == "VERTICAL" )
&& !( "PLAINTEXT" == "ACCENT_BOTH" && "VERTICAL" == "HORIZONTAL") )
{
strTextAlignment = 'ALIGN="CENTER"';
} else {
strTextAlignment = 'ALIGN="LEFT"';
}
 
 
if (nLinkGap > 0) strHTML += '<TR><TD WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\"><IMG SRC=\"/tp.gif\" WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\" BORDER=\"0\"></TD></TR>';
strHTML += '<TR>';


strHTML += '<TD ' + strTextAlignment + ' VALIGN=\"MIDDLE\"  NOWRAP>';

strHTML += '<A TARGET="_parent" HREF=\"About_Us.html\" ';
if (navigator.userAgent.indexOf("IE") != -1) {
var style = ' STYLE=\"';
var underline = '';
var fontColor = '';

if(Vertical_Nav_White_2isCurrentPage('About_Us.html')) {
fontColor = 'color:#999999';
} else {
fontColor = 'color:#FFFFFF';

strHTML += ' onMouseOver=\"Vertical_Nav_White_2textMouseOn(this);\" '; 
strHTML += ' onMouseOut=\"Vertical_Nav_White_2textMouseOff(this);\" ';
	
}	


underline = 'text-decoration:none';

style += fontColor;
if (underline != '') {
style += ';' + underline;
}
strHTML += style + '\"';
}
strHTML += '>';
if (nVerticalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\"><BR>';
if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\" ALIGN=\"LEFT\">';



if (navigator.userAgent.indexOf("IE") == -1) {

if(Vertical_Nav_White_2isCurrentPage('About_Us.html')) {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#999999\" SIZE=\"3\">';
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#FFFFFF\" SIZE=\"3\">';
}
	
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" SIZE=\"3\">';
}
var strFormattingStart = ''; 
var strFormattingEnd = '';
	

strFormattingStart += '<B>';
strFormattingEnd = '</B>' + strFormattingEnd;

strHTML += strFormattingStart + "About Us" + strFormattingEnd + '</FONT>';


if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\">';
if (nVerticalLinkGapInCell > 0) strHTML += '<BR><IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\">';
strHTML += '</A>';
strHTML += '</TD>';
 
strHTML += '</TR>';





var nLinksPerRow = 6;
var nLinkGap = 1;
var nVerticalLinkGapInCell = 3;
var nHorizontalLinkGapInCell = 6;


var strTextAlignment = '';
if( "PLAINTEXT" != "ACCENT_LEFT"
&& !( "PLAINTEXT" == "LINES" && "VERTICAL" == "VERTICAL" )
&& !( "PLAINTEXT" == "ACCENT_BOTH" && "VERTICAL" == "HORIZONTAL") )
{
strTextAlignment = 'ALIGN="CENTER"';
} else {
strTextAlignment = 'ALIGN="LEFT"';
}
 
 
if (nLinkGap > 0) strHTML += '<TR><TD WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\"><IMG SRC=\"/tp.gif\" WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\" BORDER=\"0\"></TD></TR>';
strHTML += '<TR>';


strHTML += '<TD ' + strTextAlignment + ' VALIGN=\"MIDDLE\"  NOWRAP>';

strHTML += '<A TARGET="_parent" HREF=\"Feedback_Form.html\" ';
if (navigator.userAgent.indexOf("IE") != -1) {
var style = ' STYLE=\"';
var underline = '';
var fontColor = '';

if(Vertical_Nav_White_2isCurrentPage('Feedback_Form.html')) {
fontColor = 'color:#999999';
} else {
fontColor = 'color:#FFFFFF';

strHTML += ' onMouseOver=\"Vertical_Nav_White_2textMouseOn(this);\" '; 
strHTML += ' onMouseOut=\"Vertical_Nav_White_2textMouseOff(this);\" ';
	
}	


underline = 'text-decoration:none';

style += fontColor;
if (underline != '') {
style += ';' + underline;
}
strHTML += style + '\"';
}
strHTML += '>';
if (nVerticalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\"><BR>';
if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\" ALIGN=\"LEFT\">';



if (navigator.userAgent.indexOf("IE") == -1) {

if(Vertical_Nav_White_2isCurrentPage('Feedback_Form.html')) {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#999999\" SIZE=\"3\">';
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#FFFFFF\" SIZE=\"3\">';
}
	
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" SIZE=\"3\">';
}
var strFormattingStart = ''; 
var strFormattingEnd = '';
	

strFormattingStart += '<B>';
strFormattingEnd = '</B>' + strFormattingEnd;

strHTML += strFormattingStart + "Feedback" + strFormattingEnd + '</FONT>';


if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\">';
if (nVerticalLinkGapInCell > 0) strHTML += '<BR><IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\">';
strHTML += '</A>';
strHTML += '</TD>';
 
strHTML += '</TR>';





var nLinksPerRow = 6;
var nLinkGap = 1;
var nVerticalLinkGapInCell = 3;
var nHorizontalLinkGapInCell = 6;


var strTextAlignment = '';
if( "PLAINTEXT" != "ACCENT_LEFT"
&& !( "PLAINTEXT" == "LINES" && "VERTICAL" == "VERTICAL" )
&& !( "PLAINTEXT" == "ACCENT_BOTH" && "VERTICAL" == "HORIZONTAL") )
{
strTextAlignment = 'ALIGN="CENTER"';
} else {
strTextAlignment = 'ALIGN="LEFT"';
}
 
 
if (nLinkGap > 0) strHTML += '<TR><TD WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\"><IMG SRC=\"/tp.gif\" WIDTH=\"169\" HEIGHT=\"' + nLinkGap + '\" BORDER=\"0\"></TD></TR>';
strHTML += '<TR>';


strHTML += '<TD ' + strTextAlignment + ' VALIGN=\"MIDDLE\"  NOWRAP>';

strHTML += '<A TARGET="_parent" HREF=\"Contact_Us.html\" ';
if (navigator.userAgent.indexOf("IE") != -1) {
var style = ' STYLE=\"';
var underline = '';
var fontColor = '';

if(Vertical_Nav_White_2isCurrentPage('Contact_Us.html')) {
fontColor = 'color:#999999';
} else {
fontColor = 'color:#FFFFFF';

strHTML += ' onMouseOver=\"Vertical_Nav_White_2textMouseOn(this);\" '; 
strHTML += ' onMouseOut=\"Vertical_Nav_White_2textMouseOff(this);\" ';
	
}	


underline = 'text-decoration:none';

style += fontColor;
if (underline != '') {
style += ';' + underline;
}
strHTML += style + '\"';
}
strHTML += '>';
if (nVerticalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\"><BR>';
if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\" ALIGN=\"LEFT\">';



if (navigator.userAgent.indexOf("IE") == -1) {

if(Vertical_Nav_White_2isCurrentPage('Contact_Us.html')) {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#999999\" SIZE=\"3\">';
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" COLOR=\"#FFFFFF\" SIZE=\"3\">';
}
	
} else {
strHTML += '<FONT FACE=\"Arial,Helvetica,adobe-helvetica,Arial Narrow\" SIZE=\"3\">';
}
var strFormattingStart = ''; 
var strFormattingEnd = '';
	

strFormattingStart += '<B>';
strFormattingEnd = '</B>' + strFormattingEnd;

strHTML += strFormattingStart + "Contact Us" + strFormattingEnd + '</FONT>';


if (nHorizontalLinkGapInCell > 0) strHTML += '<IMG SRC=\"/tp.gif\" WIDTH=\"' + nHorizontalLinkGapInCell + '\" HEIGHT=\"0\" BORDER=\"0\">';
if (nVerticalLinkGapInCell > 0) strHTML += '<BR><IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nVerticalLinkGapInCell + '\" BORDER=\"0\">';
strHTML += '</A>';
strHTML += '</TD>';
 
strHTML += '</TR>';


if (nLinkGap > 0) strHTML += '<TR><TD WIDTH=\"0\" HEIGHT=\"' + nLinkGap + '\"><IMG SRC=\"/tp.gif\" WIDTH=\"0\" HEIGHT=\"' + nLinkGap + '\" BORDER=\"0\"></TD></TR>';





strHTML += '</TABLE>';

return strHTML;
}
function Vertical_Nav_White_2navElement() {
if (navigator.userAgent.indexOf("Mozilla/3") != -1) {
var msg = 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';	
document.write(msg);
} else {
document.write(Vertical_Nav_White_2GetDisplayNavHTML());
}
}
function Vertical_Nav_White_2netscapeDivCheck() {
var strAppName = navigator.appName;
var appVer = parseFloat(navigator.appVersion);	
if ( (strAppName == "Netscape")&&
(appVer >= 4.0 && appVer < 5) ) { 
document.write("</DIV>");
}
}
Vertical_Nav_White_2navElement();
Vertical_Nav_White_2netscapeDivCheck();
