import React from 'react';
import TableBasic from './TableBasic/index';
import {connect} from 'dva'
import {Button} from "antd";

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum:1,
      pageSize:10,
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type:'article/initList',
      payload:{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize,
      }
    })
  }
  handleAdd(){
    this.props.history.push('/article/add')
  }
  handleDelete(id){
    this.props.dispatch({
      type:'article/deleteList',
      payload:{
        ids:id,
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize,
      }
    })
  }
  handleChange(pagination, filters, sorter){
    if(sorter.column){
      this.props.dispatch({
        type:'article/initList',
        payload:{
          pageNum:this.state.pageNum,
          pageSize:this.state.pageSize,
          orderByColumn:sorter.column.dataIndex,
          isAsc:sorter.order === 'ascend' ? 'asc':'desc'
        }
      })
    }
  }
  render() {
    const {list,total} = this.props;
    const {pageNum,pageSize} = this.state;
    const pagination  = {
      current:pageNum,
      pageSize,
      total,
      onChange:(page) => {
        this.setState({
          pageNum:page
        });
        this.props.dispatch({
          type:'article/initList',
          payload:{
            pageNum:page,
            pageSize:this.state.pageSize,
          }
        })
      }
    };

    return (
      <div>
        <Button onClick={this.handleAdd.bind(this)}>新增文章</Button>
        <TableBasic onhandleChange={this.handleChange.bind(this)}
                    onhandleDelete={this.handleDelete.bind(this)}
                    pagination={pagination}
                    list={list}/>
      </div>
    );
  }
}

export default connect(({article})=>{
  return {
    ...article
  }
})(List);
