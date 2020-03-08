import React from "react";
import styles from "./index.less";
import { Table, Divider, Tag } from "antd";

export default (props) => {
  const columns = [
    {
      title: "来源",
      dataIndex: "articleSource",
      key: "articleSource",
      render: text => <a>{text}</a>
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "时间",
      dataIndex: "sendTime",
      key: "sendTime",
      sorter:true
    },
    {
      title: "是否轮播",
      key: "isBanner",
      dataIndex: "isBanner",
      /*render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )*/

      render: isBanner => {
        let color = isBanner === '0' ? "geekblue" : "green";
        return(
          <Tag color={color} key={isBanner}>
            {isBanner === '0' ? "否" : "是"}
          </Tag>
        )
      }
    },
    {
      title: "操作区",
      key: "action",
      render: (text, record) => (
        <span>
        <a>修改</a>
        <Divider type="vertical" />
        <a onClick={() => props.onhandleDelete(record.articleId)}>删除</a>
      </span>
      )
    }
  ];

  /*const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];*/
  return(
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <Table onChange={props.onhandleChange}
               pagination={props.pagination}
               columns={columns}
               dataSource={props.list}
               rowKey={(record) => record.articleId}
        />
      </div>
    </div>
    )
};
