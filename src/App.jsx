import React, { Component} from "react";
import Message from "./components/Message";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Greet from "./components/greet";
// import Counter1 from "./components/Counter1";
import FunctionClick1 from "./components/FunctionClick1";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreetings from "./components/UserGreetings";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBounder from "./components/ErrorBounder";
import ClickCounter from "./components/ClickCounter";
import HaverCounter from "./components/HaverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoveredCounterTwo from "./components/HoveredCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/ComponentA";
import { UsreProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./hooks/ClassCounter";
import HookCounter from "./hooks/HookCounter";
import HookCounterTwo from "./hooks/HookCounterTwo";
import HookCounterThree from "./hooks/HookCounterThree";
import HookCounterFour from "./hooks/HookCounterFour";
import TodoList from "./components/TodoList";
import ClassCounterOne from "./hooks/ClassCounterOne";
import HookCounterOne from "./hooks/HookCounterOne";
import ClassMouse from "./hooks/ClassMouse";
import HookMouse from "./hooks/HookMouse";
import Testing from "./components/TodoList";
import MouseContainer from "./hooks/MouseContainer";
import ClassMouseContainer from "./hooks/ClassMouseContainer";
import Practice from "./components/Practice";
import IntervalClassCounter from "./hooks/IntervalClassCounter";
import IntervalHookCounter from "./hooks/IntervalHookCounter";
import DataFetching from "./hooks/DataFetching";
import CounterOne from "./hooks/CounterOne";
import CounterTwo2 from "./hooks/CounterTwo2";
import Practice22 from "./components/Practice22";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Practice22/>
        {/* <Parentcp/> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo2/> */}
        {/* <DataFetching/> */}
        {/* <IntervalHookCounter/>
        <IntervalClassCounter/> */}
        {/* <Practice/> */}
        {/* <ClassMouseContainer/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <HookCounterOne/>
        <ClassCounterOne/> */}
        {/* <ClassCounter/>
        <HookCounter/>
        <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <TodoList/> */}
        {/* <PostForm   /> */}
        {/* <PostList /> */}
        {/* <UsreProvider value='sunny' >
          <ComponentA />
        </UsreProvider> */}
        {/* <CounterTwo render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />)} />

        <CounterTwo render={(count, incrementCount) => (
          <HoveredCounterTwo count={count} incrementCount={incrementCount} />)} /> */}
        {/* <HoveredCounterTwo />
        <ClickCounterTwo />
        <User render={(isLoggedIn)=> isLoggedIn ? 'sunny' :'guest'}/> */}
        {/* <HaverCounter /> */}
        {/* <ClickCounter name='sunny'/> */}
        {/* <ErrorBounder>
        <Hero heroName='Batman'/>
          <Hero heroName='superman'/>
          <Hero heroName='Jocker'/>
        </ErrorBounder> */}
        {/* <div>
          <Hero heroName='Batman'/>
          <Hero heroName='superman'/>
          <Hero heroName='Jocker'/>

        </div> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreetings /> */}
        {/* <ParentComponent /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        
        {/* <Hello />
        <Greet name='sunny' heroName='kohli'> <p>this is children props</p></Greet>
        <Greet name='bunny' heroName='kohli'> <button>click me</button></Greet> */}
        {/* <Greet name='mani' heroName='kohli'/> */}
        {/* <Welcome name='sunny' heroName='kohli' /> */}
        {/* <Welcome name='bunny' heroName='kohli'/>
        <Welcome name='mani' heroName='kohli'/>  */}
        {/* <FunctionClick1 /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
      </div>
    );
  }
}
export default App;