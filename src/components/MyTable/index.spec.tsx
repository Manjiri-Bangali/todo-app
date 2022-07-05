import { render } from '@testing-library/react';
import MyTable from '.';
import axios from 'axios';

describe("MyTable Component", () => {
    it("Should render the MyTable Component", () => {
        const container = render(<MyTable />);
        expect(container).toMatchSnapshot();
    });

    it("Should fetch cart list on component load", () => {
        
    });
});