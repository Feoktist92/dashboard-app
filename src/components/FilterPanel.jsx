import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { selectFilters } from 'store/filters/filter-selectors';
import { removeFilter, clearFilter } from 'store/filters/filter-action';

const FilterPanel = () => {
    const currentFilters = useSelector(selectFilters);
    const dispatch = useDispatch();

    if (currentFilters.length === 0) {
        return null;
    }
    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge
                            key={filter}
                            onClear={() => dispatch(removeFilter(filter))}
                            variant='clearable'
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button className='link' onClick={() => dispatch(clearFilter)}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
