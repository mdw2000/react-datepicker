import styled, {css} from 'styled-components'
import {
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  gridColumnGap,
  GridColumnGapProps,
  gridGap,
  GridGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  space,
  SpaceProps,
  style,
  compose,
  flexDirection,
  FlexDirectionProps,
} from 'styled-system'

interface GridProps
  extends GridAutoColumnsProps,
    GridAutoFlowProps,
    GridAutoRowsProps,
    AlignItemsProps,
    JustifyContentProps,
    GridColumnGapProps,
    GridGapProps,
    GridRowGapProps,
    GridTemplateAreasProps,
    GridTemplateColumnsProps,
    SpaceProps,
    FlexDirectionProps,
    GridTemplateRowsProps {
  daySizeGridTemplateColumns?: number | (number | null)[] | undefined
  numberOfMonthsGridTemplateColumns?: number | (number | null)[] | undefined
  direction?: 'row' | 'column' | undefined
}

const daySizeGridTemplateColumns = style({
  // React prop name and CSS property
  prop: 'daySizeGridTemplateColumns',
  // CSS property (if different from prop argument)
  cssProperty: 'gridTemplateColumns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: n => `repeat(7, ${n}px)`,
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})

const composeGridStyles = compose(
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent,
  space,
  flexDirection,
)

const Grid = styled('div')<GridProps>`
  display: grid;
   ${({flexDirection}) =>
     flexDirection &&
     css`
       display: flex;
     `}
  ${composeGridStyles}
  ${daySizeGridTemplateColumns}
`

export default Grid
