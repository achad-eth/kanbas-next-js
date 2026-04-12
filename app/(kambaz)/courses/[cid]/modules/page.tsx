"use client";

import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import {
  addModule,
  editModule,
  updateModule as updateModuleInState,
  deleteModule as deleteModuleFromState,
  setModules,
} from "./reducer";
import { RootState } from "../../../store";
import * as client from "./client";

type Lesson = { _id: string; name: string };

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector(
    (state: RootState) => (state.modulesReducer as any).modules
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const loadModules = async () => {
      try {
        const data = await client.fetchModules(cid);
        dispatch(setModules(data));
      } catch (error) {
        console.error("Failed to load modules", error);
      }
    };
    loadModules();
  }, [cid, dispatch]);

  const createNewModule = async () => {
    if (!moduleName.trim()) return;

    try {
      const newModule = await client.createModule(cid, {
        name: moduleName,
        course: cid,
        lessons: [],
      });
      dispatch(addModule(newModule));
      setModuleName("");
    } catch (error) {
      console.error("Failed to create module", error);
      alert("Unable to create module");
    }
  };

  const saveModule = async (module: any) => {
    try {
      const updated = await client.updateModule(cid, {
        ...module,
        editing: false,
      });
      dispatch(updateModuleInState(updated));
    } catch (error) {
      console.error("Failed to update module", error);
      alert("Unable to update module");
    }
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(cid, moduleId);
      dispatch(deleteModuleFromState(moduleId));
    } catch (error) {
      console.error("Failed to delete module", error);
      alert("Unable to delete module");
    }
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createNewModule}
      />

      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />

              {!module.editing && module.name}

              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(
                      updateModuleInState({
                        ...module,
                        name: e.target.value,
                      })
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule(module);
                    }
                  }}
                  onBlur={(e) =>
                    saveModule({
                      ...module,
                      name: e.target.value,
                    })
                  }
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={removeModule}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {(module.lessons || []).map((lesson: Lesson) => (
                <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  <LessonControlButtons />
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}