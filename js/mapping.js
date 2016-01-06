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
	"ASStackLayoutAlignSelfBaselineFirst": "baseline", //Warning: inexact mapping, there may be mismath behaviours
	"ASStackLayoutAlignSelfBaselineLast": "baseline", //Warning: inexact mapping, there may be mismath behaviours
	
	"ASStackLayoutDirectionHorizontal": "row",
	"ASStackLayoutDirectionVertical": "column", 
	//Warning: 'flex-direction: row-reverse' and 'flex-direction: column-reverse' have no ASDK counterparts

	"ASStackLayoutJustifyContentStart": "flex-start", 
	"ASStackLayoutJustifyContentEnd": "flex-end", 
	"ASStackLayoutJustifyContentCenter": "center", 
	"ASStackLayoutJustifyContentSpaceBetween": "space-between", 
	"ASStackLayoutJustifyContentSpaceAround": "space-around"	
};
