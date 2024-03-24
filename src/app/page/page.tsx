import { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';

const Page: React.FunctionComponent<PropsWithChildren> = ({
    children,
}): JSX.Element => {
    return <>{children}</>;
};

Page.propTypes = {
    children: PropTypes.node,
};

export default Page;
