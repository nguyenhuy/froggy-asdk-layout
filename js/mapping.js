var nativeToJSMap = {
	"alignItems": "align-items", 
	"alignSelf": "align-self", 
	"direction": "flex-direction", 
	"justifyContent": "justify-content", 
	
	"ASStackLayoutAlignItemsStart": "flex-start",
	"ASStackLayoutAlignItemsEnd": "flex-end", 
	"ASStackLayoutAlignItemsCenter": "center", 
	"ASStackLayoutAlignItemsStretch": "stretch", 
	"ASStackLayoutAlignItemsBaselineFirst": "baseline", //Warning: inexact mapping, there may be mismath behaviours
	"ASStackLayoutAlignItemsBaselineLast": "baseline", //Warning: inexact mapping, there may be mismath behaviours
	
	"ASStackLayoutAlignSelfAuto": "flex-start", //Warning: ASStackLayoutAlignSelfAuto has no JS counterpart, use flex-start instead
	"ASStackLayoutAlignSelfStart": "flex-start", 
	"ASStackLayoutAlignSelfEnd": "flex-end", 
	"ASStackLayoutAlignSelfCenter": "center", 
	"ASStackLayoutAlignSelfStretch": "stretch", 
	//Warning: 'align-self: baseline' has no ASDK counterpart

	"ASStackLayoutDirectionVertical": "row", 
	"ASStackLayoutDirectionHorizontal": "column",
	//Warning: 'flex-direction: row-reverse' and 'flex-direction: column-reverse' have no ASDK counterparts

	"ASStackLayoutJustifyContentStart": "flex-start", 
	"ASStackLayoutJustifyContentEnd": "flex-end", 
	"ASStackLayoutJustifyContentCenter": "center", 
	"ASStackLayoutJustifyContentSpaceBetween": "space-between", 
	"ASStackLayoutJustifyContentSpaceAround": "space-around"	
};
