import {
  GridAutoColumnsProps,
  GridAutoFlowProps,
  GridAutoRowsProps,
  AlignItemsProps,
  JustifyContentProps,
  GridColumnGapProps,
  GridGapProps,
  GridRowGapProps,
  GridTemplateAreasProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  SpaceProps,
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
declare const Grid: import('styled-components').StyledComponent<'div', any, GridProps, never>
export default Grid
