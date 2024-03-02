import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Checkbox, Button } from 'antd';
SliderSliderSlider

const style = { background: '#4a4a4a', padding: '8px 13px', color: 'white' };
const style2 = { margin: '0px 10px', padding: '2px 0', };
const style1 = { margin: '0px 10px', background: '#666666', padding: '2px 23px', color: 'white' };

const Checkboxdata = () => {
    const [demo, setdemo] = useState([]);
    const [tdata, settdata] = useState(Tdata);
    const [val, setVal] = useState([]);




    const nclkpdate = () => {

        const result = tdata.filter(item => item.select === true);

        setdemo(
            result.map((item) =>

                item.name

            )
        );
    }
    const demo2 = () => {

        const result = Tdata.filter((item) => {
            return (item.cat === val)
        })

        settdata(result);

    }

    return (
        <>
            <select value={val} onChange={(e) => {
                setVal(e.target.value);

            }

            }>
                <option value='All' >--select--</option>
                {

                    CatData.map((itm) => (
                        <option key={itm.id} value={itm.pcat}>{itm.pcat}</option>
                    ))
                }


            </select>

            <button onClick={demo2}>click here</button>
            <div>
                <div style={style2}>

                    <Row style={style}>
                        <Col className="gutter-row" span={2}>
                            <div style={style}>
                                <Checkbox
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        settdata(
                                            tdata.map(d => {
                                                d.select = checked;
                                                return d;
                                            }));
                                    }}
                                />
               Select</div> </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>Name</div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>Category</div>
                        </Col>
                    </Row></div>
                <div style={style1}>
                    {

                        tdata.map((item) =>

                            <Row style={{ margin: '0px 10px', padding: '2px 0', backgroundColor: item.colors }} >

                                <Col className="gutter-row" span={2}>
                                    <Checkbox
                                        onChange={event => {
                                            let checked = event.target.checked;
                                            settdata(
                                                tdata.map(data => {
                                                    if (item.id === data.id) {
                                                        data.select = checked;
                                                    }
                                                    return data;
                                                })
                                            );
                                        }}
                                        checked={item.select}
                                    />
                                </Col>
                                <Divider type="vertical" />
                                <Col className="gutter-row" span={8}>
                                    {item.name}
                                </Col><Divider type="vertical" />
                                <Col className="gutter-row" span={8}>{item.cat}</Col>
                                <Divider type="vertical" />
                            </Row>)}
                </div>
                <Button type='primary' onClick={nclkpdate}>Click Here</Button>
                {demo}
            </div>
        </>
    )
}

export default Checkboxdata
