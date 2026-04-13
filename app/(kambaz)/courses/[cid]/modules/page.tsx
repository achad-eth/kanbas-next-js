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
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { RootState } from "../../../store";
import * as client from "../../../courses/client";

type Lesson = { _id: string; name: string };

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector(
    (state: RootState) => (state.modulesReducer as any).modules
  );
  const currentUser = useSelector(
    (state: RootState) => (state.accountReducer as any).currentUser
  );
  const dispatch = useDispatch();
  const canEdit = currentUser?.role !== "STUDENT";

  useEffect(() => {
    const loadModules = async () => {
      const data = await client.findModulesForCourse(cid);
      dispatch(setModules(data));
    };
    loadModules();
  }, [cid]);

  const handleAddModule = async () => {
    const newModule = await client.createModule(cid, {
      name: moduleName,
      course: cid,
      lessons: [],
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const handleDeleteModule = async (moduleId: string) => {
    await client.deleteModule(cid, moduleId);
    dispatch(deleteModule(moduleId));
  };

  const handleUpdateModule = async (module: any) => {
    await client.updateModule(cid, module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      {canEdit && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={handleAddModule}
        />
      )}

      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((m: any) => m.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />

                {!module.editing && module.name}

                {module.editing && canEdit && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}

                {canEdit && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={handleDeleteModule}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>

              <ListGroup className="wd-lessons rounded-0">
                {module.lessons?.map((lesson: Lesson) => (
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
