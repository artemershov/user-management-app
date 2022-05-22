import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface StyledDialogTitleProps extends DialogTitleProps {
    onClose: any;
}

export const StyledDialogTitle: FC<StyledDialogTitleProps> = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle {...other}>
            {children ? (
                <>
                    {children}
                    <Divider
                        sx={{
                            borderColor: '#888',
                            mt: 1,
                        }}
                    />
                </>
            ) : null}
            {onClose ? (
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 2,
                        top: 2,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default StyledDialogTitle;
