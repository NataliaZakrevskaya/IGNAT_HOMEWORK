import React, {useState} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    step?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        min,
        max,
        step,
        disabled
    }
) => {
    const valueText = (value: number) => {
        return `${value}`
    }

    const minDistance = 3;

    const [valueRange, setValueRange] = useState<Array<number>>(value)
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValueRange([clamped, clamped + minDistance])
                onChangeRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValueRange([clamped - minDistance, clamped]);
                onChangeRange([clamped - minDistance, clamped]);
            }
        } else {
            setValueRange(newValue as Array<number>);
            onChangeRange([newValue[0], newValue[1]]);
        }
    }

    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    step={step}
                    min={min}
                    max={max}
                    getAriaLabel={() => 'Minimum distance'}
                    value={valueRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disableSwap
                    disabled={disabled}
                    getAriaValueText={valueText}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
