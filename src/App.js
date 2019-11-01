import React from "react";
import "./App.css";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Customer from "./components/customer";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto" //x축으로 오버플로우가 발생할 수 있도록 처리하는 것읻.
  },
  table: {
    minWidth: 1080 // 화면의 크기가 1080이하로 되었을때는 스크롤바가 발생하도록 해준다,
  }
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "박경석",
    birthday: "2018/11/12",
    gender: "남자",
    job: "엔지니어"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "パクパク",
    birthday: "2011/5/11",
    gender: "남자",
    job: "블로거"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "paku fpv",
    birthday: "1999/6/5",
    gender: "남자",
    job: "파일럿"
  }
];

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(customer => {
              return (
                <Customer
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
